import React from 'react'
import { MobileStepper, Button } from '@mui/material'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'

const noop = () => {}

export default function DotsMobileStepper({
  steps = 5,
  onBack = noop,
  onNext = noop,
  activeStep = 0,
  alwaysAllowNext = false,
  ...props
}) {
  const isLastStep = activeStep === steps - 1

  return (
    <MobileStepper
      variant="dots"
      steps={steps}
      position="static"
      activeStep={activeStep}
      backButton={
        <Button size="small" onClick={onBack} disabled={activeStep === 0}>
          <KeyboardArrowLeft />
          Zurück
        </Button>
      }
      nextButton={
        <Button
          size="small"
          variant="text"
          onClick={onNext}
          disabled={!alwaysAllowNext && isLastStep}
        >
          Weiter
          <KeyboardArrowRight />
        </Button>
      }
      {...props}
    />
  )
}
