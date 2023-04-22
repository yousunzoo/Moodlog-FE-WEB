import React, { MouseEvent, useState } from 'react'
import TopBar from '../../components/topBar'
import Canvas from '../../components/canvas'
import DiaryEditor from '../../components/diaryEditor'

function DiaryCreatePage() {
  const [step, setStep] = useState('first')
  const [diary, setDiary] = useState({
    title: '',
    body: '',
    img: null,
    feeling_code: 1,
    open: true,
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setDiary({
      ...diary,
      [id]: value,
    })
  }
  const handleChangeMood = (e: React.MouseEvent<HTMLLIElement>) => {
    const { mood } = e.currentTarget.dataset
    setDiary({
      ...diary,
      feeling_code: Number(mood),
    })
  }
  const changeStep = (e: MouseEvent<HTMLDivElement>) => {
    if (!(e.target instanceof HTMLButtonElement)) return
    const step = e.target.dataset.step as string
    switch (step) {
      case 'cancel':
        break
      case 'prev':
        setStep('first')
        break
      case 'next':
        setStep('second')
        break
    }
  }
  return (
    <>
      <TopBar step={step} changeStep={changeStep} />
      {step === 'first' ? (
        <Canvas />
      ) : (
        <DiaryEditor diary={diary} onChange={onChange} handleChangeMood={handleChangeMood} />
      )}
    </>
  )
}

export default DiaryCreatePage
