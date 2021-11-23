import React from 'react'
import FloatingActionButton from '../../components/MainFloatingActionButton'
import { Edit } from '@mui/icons-material'

export default React.forwardRef(function EditButton(props, ref) {
  return (
    <FloatingActionButton {...props} ref={ref}>
      <Edit />
    </FloatingActionButton>
  )
})
