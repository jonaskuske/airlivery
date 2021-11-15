import React from 'react'
import FloatingActionButton from '../../components/MainFloatingActionButton'
import { Edit } from '@material-ui/icons'

export default function EditButton(props) {
  return (
    <FloatingActionButton {...props}>
      <Edit />
    </FloatingActionButton>
  )
}
