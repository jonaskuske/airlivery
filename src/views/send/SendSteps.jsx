import React from 'react'

import ChoosePackageSize from './sendSteps/ChoosePackageSize'
import ChooseDestination from './sendSteps/ChooseDestination'
import ChoosePayment from './sendSteps/ChoosePayment'
import ChooseAirspot from './sendSteps/ChooseAirspot'
import Cart from './sendSteps/Cart'

const stepComponents = [
  ChoosePackageSize,
  ChooseDestination,
  ChoosePayment,
  ChooseAirspot,
  Cart,
]

const SendSteps = ({
  activeStep,
  selection,
  options,
  setSelection,
  onDone,
}) => {
  const CurrentStep = stepComponents[activeStep]

  return (
    <CurrentStep
      options={options}
      setSelection={setSelection}
      selection={selection}
      onDone={onDone}
    />
  )
}

export default SendSteps
