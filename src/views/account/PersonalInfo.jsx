import React from 'react'

import InfoPanel from './personalInfo/InfoPanel'
import AirspotsList from './personalInfo/AirspotsList'

export default ({ user, edit, airspots }) => {
  return (
    <React.Fragment>
      <InfoPanel user={user} edit={edit} />
      <AirspotsList airspots={airspots} edit={edit} />
    </React.Fragment>
  )
}
