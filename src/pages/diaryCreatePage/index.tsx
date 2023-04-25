import { ChangeEvent, MouseEvent, useEffect, useState } from 'react'
import TopBar from '../../components/topBar'
import Canvas from '../../components/canvas'
import DiaryEditor from '../../components/diaryEditor'
import { Diary } from '../../types/createDiary'
import { usePostDiary } from '../../hooks/usePostDiary'
import { PostProp } from '../../apis/type'
import Alert from '../../components/common/alert'
import { useNavigate, useParams } from 'react-router-dom'
import { useMutation } from 'react-query'
import { getPost } from '../../apis/diary'
import { useUpdateDiary } from '../../hooks/useUpdateDiary'
import { toDataURL } from '../../utils/toDataURL'

function DiaryCreatePage() {
  const { id } = useParams()
  const { data: curDiary, mutate } = useMutation(() => getPost(Number(id)))
  const [step, setStep] = useState('first')
  const [diary, setDiary] = useState<Diary>({
    title: '',
    body: '',
    img: null,
    feeling_code: 1,
    open: true,
  })
  const [message, setMessage] = useState('')
  const [isAlertOpen, setIsAlertOpen] = useState(false)
  const navigate = useNavigate()
  const postDiary = usePostDiary()
  const updateDiary = useUpdateDiary()
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setDiary({
      ...diary,
      [id]: value,
    })
  }
  const handleChangeMood = (e: MouseEvent<HTMLLIElement>) => {
    const { mood } = e.currentTarget.dataset

    setDiary({
      ...diary,
      feeling_code: Number(mood),
    })
  }

  const handleChangeOpen = (e: MouseEvent<HTMLDivElement>) => {
    if (!(e.target instanceof HTMLButtonElement)) return
    const { open } = e.target.dataset
    setDiary({
      ...diary,
      open: open === 'true' ? true : false,
    })
  }
  const changeStep = (e: MouseEvent<HTMLDivElement>) => {
    if (!(e.target instanceof HTMLButtonElement)) return
    const step = e.target.dataset.step as string
    switch (step) {
      case 'cancel':
        navigate(-1)
        break
      case 'prev':
        setStep('first')
        break
      case 'next':
        if (!diary.img) {
          setMessage('그림을 그려주세요')
          setIsAlertOpen(true)
          return
        }
        setStep('second')
        break
      case 'submit':
        if (!diary.title || !diary.body) {
          setMessage('제목과 내용을 입력해주세요')
          setIsAlertOpen(true)
          return
        }
        if (id) {
          updateDiary({ post: diary, postId: Number(id) })
          return
        }
        postDiary(diary as PostProp)
    }
  }

  const saveImage = (imageDataUrl: string | null) => {
    setDiary({
      ...diary,
      img: imageDataUrl,
    })
  }

  const handleCloseAlert = () => {
    setIsAlertOpen(false)
  }

  useEffect(() => {
    if (!id) return
    mutate()
    setStep('second')
  }, [])
  useEffect(() => {
    if (!curDiary) return
    setDiary({ ...curDiary })
  }, [curDiary])
  return (
    <>
      <TopBar step={step} changeStep={changeStep} />
      {step === 'first' ? (
        <Canvas img={diary.img} saveImage={saveImage} />
      ) : (
        <DiaryEditor
          diary={diary}
          onChange={onChange}
          handleChangeMood={handleChangeMood}
          handleChangeOpen={handleChangeOpen}
        />
      )}
      <Alert isOpen={isAlertOpen} onClose={handleCloseAlert} message={message}></Alert>
    </>
  )
}

export default DiaryCreatePage
