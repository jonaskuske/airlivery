import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { readImageFromInput } from '../../../../utils'

const StyledEditActions = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-end;
  align-items: flex-end;
  > button {
    margin-top: 1rem;
  }
`

export default class EditActions extends React.Component {
  constructor(props) {
    super(props)
    this.imageInput = React.createRef()
  }

  handleChange = async (evt) => {
    const { imageInput, props } = this
    const image = await readImageFromInput(evt)
    imageInput.current.value = ''
    props.updateUser({ profilePicture: image })
  }

  render() {
    const { updateUser } = this.props
    return (
      <StyledEditActions className="test">
        <p style={{ textAlign: 'right' }}>
          Passwort und Mail-Adresse lassen sich in den Einstellungen ändern.
        </p>
        <Button
          variant="outlined"
          size="small"
          color="primary"
          onClick={() => this.imageInput.current.click()}
        >
          Bild ändern
        </Button>
        <Button
          variant="outlined"
          size="small"
          color="primary"
          onClick={() => updateUser({ profilePicture: '' })}
        >
          Bild entfernen
        </Button>
        <input
          style={{ display: 'none' }}
          ref={this.imageInput}
          type="file"
          accept="image/*"
          onChange={this.handleChange}
        />
      </StyledEditActions>
    )
  }
}
