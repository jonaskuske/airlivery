import React from 'react'

import ChoosePackage from './sendSteps/ChoosePackage'
import ChooseDestination from './sendSteps/ChooseDestination'
import ChoosePayment from './sendSteps/ChoosePayment'
import ChooseAirspot from './sendSteps/ChooseAirspot'
import Cart from './sendSteps/Cart'
import Confirmation from './sendSteps/Confirmation'

const steps = [
  ChoosePackage,
  ChooseDestination,
  ChoosePayment,
  ChooseAirspot,
  Cart,
  Confirmation,
]

export default props => {
  const { step } = props
  const CurrentStep = steps[step] || steps[steps.length - 1]
  return <CurrentStep />
}
