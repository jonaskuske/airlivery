import React from 'react'
import { MobileStepper, Button } from '@material-ui/core'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activeStep: props.activeStep || 0 }
    this.handleStepChange = props.onStepChange
  }
  handleNext = () => {
    const { onDone, dots } = this.props

    if (!this.doneCalled && onDone && this.state.activeStep + 2 === dots) {
      this.doneCalled = true
      onDone()
    }

    const next = this.state.activeStep + 1
    this.setState({
      activeStep: next,
    })
    this.handleStepChange(next)
    this.props.onNext && this.props.onNext()
  }
  handleBack = () => {
    const next = this.state.activeStep - 1
    this.setState({
      activeStep: next,
    })
    this.handleStepChange(next)
  }
  doneCalled = false

  componentWillUpdate() {}

  render() {
    const { dots = 5 } = this.props

    return (
      <MobileStepper
        variant="dots"
        steps={dots}
        position="static"
        activeStep={this.state.activeStep}
        className={this.props.className || ''}
        nextButton={
          <Button
            size="small"
            onClick={this.handleNext}
            disabled={this.state.activeStep === dots - 1}
          >
            {this.state.activeStep >= dots - 2 ? 'Fertig' : 'Weiter'}
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={this.handleBack}
            disabled={
              this.state.activeStep === 0 || this.state.activeStep === dots - 1
            }
          >
            <KeyboardArrowLeft />
            Zurück
          </Button>
        }
      />
    )
  }
}
