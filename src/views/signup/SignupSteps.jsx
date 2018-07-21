import React from 'react'
import PersonalInfo from './signupSteps/PersonalInfo'
import RegulatoryInfo from './signupSteps/RegulatoryInfo'
import Success from './signupSteps/Success'

const steps = [PersonalInfo, RegulatoryInfo, Success]

export default ({ activeStep, handleValueChange, value }) => {
  return steps.map((Component, index) => (
    <Component
      handleValueChange={handleValueChange}
      key={index}
      style={{ display: activeStep !== index && 'none' }}
      value={value}
    />
  ))
}
