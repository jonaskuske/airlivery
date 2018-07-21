import React from 'react'
import { MobileStepper, Button } from '@material-ui/core'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons'

const noop = () => {}

export default ({
  steps = 5,
  onBack = noop,
  onNext = noop,
  activeStep = 0,
  ...props
}) => {
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
          disabled={isLastStep}
        >
          Weiter
          <KeyboardArrowRight />
        </Button>
      }
      {...props}
    />
  )
}
