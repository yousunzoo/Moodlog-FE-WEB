import React, { MouseEvent, useState } from 'react'
import TopBar from '../../components/topBar'
import Canvas from '../../components/canvas'
import DiaryForm from '../../components/diaryForm'

function DiaryCreatePage() {
  const [step, setStep] = useState('first')
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
      {step === 'first' ? <Canvas /> : <DiaryForm />}
    </>
  )
}

export default DiaryCreatePage
