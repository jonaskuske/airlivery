import React from 'react'
import styled from 'styled-components'

import ErrorCount from './ErrorCount'
import ErrorText from './ErrorText'
import ErrorSmiley from './ErrorSmiley'
import ErrorButtons from './ErrorButtons'

const StyledErrorView = styled.div`
  background: #707070;
  color: #ffffff;
  will-change: max-height;
  transition: max-height 380ms ease-out;
  overflow: hidden;
  box-shadow: inset 0px -7px 10px 1px rgba(0, 0, 0, 0.3);
  max-height: ${({ visible }) => (visible ? '350px' : 0)};
`
const StyledErrorViewInner = styled.div`
  margin-top: 1rem;
`

export default class extends React.Component {
  state = { render: false, visible: false, lastError: {} }

  componentDidMount() {
    if (this.props.error) this.slideIn()
  }

  componentWillReceiveProps(newProps) {
    if (newProps.error) this.slideIn()
    else {
      this.setState({ lastError: this.props.error })
      this.slideOut()
    }
  }

  slideIn = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    this.setState({ render: true })
    setTimeout(() => this.setState({ visible: true }), 50)
  }

  slideOut = () => {
    this.setState({ visible: false })
  }

  handleTransitionEnd = () => {
    !this.props.error && this.setState({ render: false })
  }

  render() {
    if (!this.state.render) return null
    const { error = this.state.lastError, setAsSeen, errors } = this.props

    return (
      <StyledErrorView
        visible={this.state.visible}
        onTransitionEnd={this.handleTransitionEnd}
      >
        <StyledErrorViewInner className="max-width">
          <ErrorCount errors={errors} />
          <ErrorSmiley />
          <ErrorText error={error} />
          <ErrorButtons onClick={() => setAsSeen(error)} error={error} />
        </StyledErrorViewInner>
      </StyledErrorView>
    )
  }
}
