import React from 'react'

import InfoPanel from './personalInfo/InfoPanel'
import AirspotsList from './personalInfo/AirspotsList'

export default ({ user, edit }) => {
  return (
    <React.Fragment>
      <InfoPanel user={user} edit={edit} />
      <AirspotsList user={user} edit={edit} />
    </React.Fragment>
  )
}
