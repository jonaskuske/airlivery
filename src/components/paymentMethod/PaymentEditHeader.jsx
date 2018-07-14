import React from 'react'
import styled from 'styled-components'
import { Zoom, withTheme } from '@material-ui/core'
import { Edit, Delete, Check } from '@material-ui/icons'
import MicroButton from '../MicroFloatingActionButton'

const StyledHeader = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  > button {
    margin-right: 0.5rem;
  }
`

export default withTheme()(({ edit, active, toggleEdit, theme, onDelete }) => {
  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  }

  return (
    <StyledHeader>
      <Zoom
        in={edit && active}
        unmountOnExit
        timeout={transitionDuration}
        style={{
          transitionDelay: edit && active ? transitionDuration.exit : 0,
          display: active ? 'inline-flex' : 'none',
        }}
      >
        <MicroButton onClick={toggleEdit} color="primary">
          <Check />
        </MicroButton>
      </Zoom>
      <Zoom
        in={edit && !active}
        timeout={transitionDuration}
        unmountOnExit
        style={{
          transitionDelay: edit && !active ? transitionDuration.exit : 0,
        }}
      >
        <MicroButton onClick={toggleEdit} color="primary">
          <Edit />
        </MicroButton>
      </Zoom>
      <Zoom
        in={edit && !active}
        timeout={transitionDuration}
        unmountOnExit
        style={{
          transitionDelay: edit && !active ? transitionDuration.exit : 0,
        }}
      >
        <MicroButton color="primary" onClick={onDelete}>
          <Delete />
        </MicroButton>
      </Zoom>
    </StyledHeader>
  )
})
