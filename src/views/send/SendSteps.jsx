import React from 'react'

import ChoosePackage from './ChoosePackage'
import ChooseDestination from './ChooseDestination'

const steps = [ChoosePackage, ChooseDestination]

export default props => {
  const { step } = props
  const CurrentStep = steps[step] || steps[steps.length - 1]
  return <CurrentStep />
}
