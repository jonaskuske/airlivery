import React from 'react'
import { TextField, Button, IconButton } from '@material-ui/core'
import { Delete, Edit } from '@material-ui/icons'
import styled from 'styled-components'
import UserImage from '../../../components/UserImage'
import { readImageFromInput } from '../../../utils'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  > div:last-of-type {
    margin-bottom: 1rem;
  }
`
const NameContainer = styled.div`
  overflow: hidden;
`
const ImageContainer = styled.div`
  && {
    flex: 2;
  }
`
const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  > div {
    margin-right: 1rem;
    flex: 10;
  }
  > div:last-of-type {
    margin-right: 0;
  }
`
const StreetInputRow = InputRow.extend`
  > div:last-of-type {
    flex: 3;
  }
`
const CityInputRow = InputRow.extend`
  > div:first-of-type {
    flex: 5;
  }
`
const Subtitle = styled.h2`
  margin: 1.5rem 0 0.5rem 0;
`
const StyledTextField = styled(TextField)`
  && {
    margin-bottom: 0.5rem;
  }
`

export default class extends React.Component {
  state = { iconButton: false }

  imageRef = React.createRef()

  handleImageChange = async evt => {
    const { imageRef, props } = this
    const image = await readImageFromInput(evt)
    imageRef.current.value = ''
    props.handleValueChange({
      target: { name: 'profilePicture', value: image },
    })
  }
  componentDidMount() {
    this.mediaQuery = window.matchMedia('(max-width: 350px)')
    this.queryHandler = q => this.setState({ iconButton: q.matches })
    this.queryHandler(this.mediaQuery)
    this.mediaQuery.addListener(this.queryHandler)
  }
  componentWillUnmount() {
    this.mediaQuery.removeListener(this.queryHandler)
  }

  render() {
    const { handleValueChange, value, showFormErrors, ...props } = this.props
    const { iconButton } = this.state

    return (
      <Container {...props}>
        <InputRow>
          <NameContainer>
            <Subtitle>Name</Subtitle>
            <StyledTextField
              name="firstName"
              label="Vorname"
              placeholder="Max"
              value={value.firstName}
              onChange={handleValueChange}
              required
              error={showFormErrors && !value.firstName}
            />
            <StyledTextField
              name="lastName"
              label="Nachname"
              placeholder="Mustermann"
              value={value.lastName}
              onChange={handleValueChange}
              required
              error={showFormErrors && !value.lastName}
            />
          </NameContainer>
          <ImageContainer>
            <UserImage image={value.profilePicture} />
            <InputRow>
              {iconButton ? (
                <IconButton onClick={() => this.imageRef.current.click()}>
                  <Edit />
                </IconButton>
              ) : (
                <Button onClick={() => this.imageRef.current.click()}>
                  Ändern
                </Button>
              )}

              <IconButton
                onClick={() =>
                  handleValueChange({
                    target: { name: 'profilePicture', value: '' },
                  })
                }
              >
                <Delete />
              </IconButton>
            </InputRow>
          </ImageContainer>
        </InputRow>
        <Subtitle>Adresse</Subtitle>
        <StreetInputRow>
          <StyledTextField
            name="street"
            label="Straße"
            placeholder="Lange Straße"
            value={value.street}
            onChange={handleValueChange}
            required
            error={showFormErrors && !value.street}
          />
          <StyledTextField
            name="streetNumber"
            label="Nr."
            placeholder="3a"
            value={value.streetNumber}
            onChange={handleValueChange}
            required
            error={showFormErrors && !value.streetNumber}
          />
        </StreetInputRow>
        <CityInputRow>
          <StyledTextField
            name="plz"
            type="number"
            label={iconButton ? 'PLZ' : 'Postleitzahl'}
            placeholder="23568"
            value={value.plz}
            onChange={handleValueChange}
            required
            error={showFormErrors && !value.plz}
          />
          <StyledTextField
            name="city"
            label="Stadt"
            placeholder="Neustadt"
            value={value.city}
            onChange={handleValueChange}
            required
            error={showFormErrors && !value.city}
          />
        </CityInputRow>
        <input
          style={{ display: 'none' }}
          ref={this.imageRef}
          type="file"
          accept="image/*"
          onChange={this.handleImageChange}
        />
      </Container>
    )
  }
}
