import React from 'react'

import InfoPanel from './personalInfo/InfoPanel'
import AirspotsList from './personalInfo/AirspotsList'

export default function PersonalInfo({ user, edit, airspots, actions }) {
  return (
    <React.Fragment>
      <InfoPanel user={user} edit={edit} actions={actions} />
      <AirspotsList airspots={airspots} edit={edit} actions={actions} />
    </React.Fragment>
  )
}
