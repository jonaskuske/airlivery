import React from 'react'
import PersonalInfo from './signupSteps/PersonalInfo'
import RegulatoryInfo from './signupSteps/RegulatoryInfo'
import Confirmation from './signupSteps/Confirmation'

const steps = [PersonalInfo, RegulatoryInfo, Confirmation]

export default function SignupSteps({ activeStep, ...props }) {
  return steps.map((Component, index) => (
    <Component
      key={index}
      style={{ display: activeStep !== index && 'none' }}
      {...props}
    />
  ))
}
