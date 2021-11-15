import React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from '@material-ui/core'

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" {...props} ref={ref} />
})

const AlertDialogSlide = ({
  open,
  onConfirm,
  onCancel,
  onClose,
  buttonTexts = {},
  title,
  content,
}) => {
  const { confirm, cancel } = buttonTexts

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        onClose={onClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {title || 'Titel'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {content || 'Hier der Inhalt'}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel} color="primary">
            {cancel || 'Abbrechen'}
          </Button>
          <Button onClick={onConfirm} color="primary">
            {confirm || 'OK'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AlertDialogSlide
