import React from 'react'
import FloatingActionButton from '../../components/MainFloatingActionButton'
import { Edit } from '@material-ui/icons'

export default props => (
  <FloatingActionButton {...props}>
    <Edit />
  </FloatingActionButton>
)
