import React from 'react'
import styled from 'styled-components'
import { Button, Checkbox, FormControlLabel } from '@material-ui/core'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledFormControlLabel = styled(FormControlLabel)`
  > span {
    font-family: inherit;
  }
`

export default class Confirmation extends React.Component {
  state = { agb: false, privacy: false }

  handleAgbChange = ({ target }) => this.setState({ agb: target.checked })
  handlePrivacyChange = ({ target }) =>
    this.setState({ privacy: target.checked })

  render() {
    const { onConfirm, ...props } = this.props
    const { agb, privacy } = this.state

    return (
      <Container {...props}>
        <h2>Fast geschafft!</h2>
        <p>
          Um die Registrierung abzuschließen, musst du noch einige rechtlichen
          Bedingungen bestätigen.
        </p>
        <StyledFormControlLabel
          label="Ich habe die AGBs gelesen und akzeptiere diese."
          control={<Checkbox onChange={this.handleAgbChange} checked={agb} />}
        />
        <StyledFormControlLabel
          label="Ich erkläre mich mit den Datenschutzbedingungen einverstanden."
          control={
            <Checkbox onChange={this.handlePrivacyChange} checked={privacy} />
          }
        />
        <br />
        <br />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={!privacy || !agb}
        >
          Registrierung abschließen
        </Button>
      </Container>
    )
  }
}
