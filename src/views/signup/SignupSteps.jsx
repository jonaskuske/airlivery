import React from 'react'
import PersonalInfo from './signupSteps/PersonalInfo'
import RegulatoryInfo from './signupSteps/RegulatoryInfo'
import Success from './signupSteps/Success'

const steps = [PersonalInfo, RegulatoryInfo, Success]

export default ({ step, handleValueChange, value }) => {
  return steps.map((Component, index) => (
    <Component
      handleValueChange={handleValueChange}
      key={index}
      style={{ display: step !== index && 'none' }}
      value={value}
    />
  ))
}
