import React from 'react'
import HeaderMobile from './headerMobile/Header'

export default class HeaderMobileFixed extends React.Component {
  constructor(props) {
    super(props)

    this.lastScrollPos =
      document.documentElement.scrollTop || document.body.scrollTop
    this.state = {
      isFixed: this.lastScrollPos > 0,
      hide: this.lastScrollPos > 0,
      transition: this.lastScrollPos > 0,
    }
    this.handleScroll = this.handleScroll.bind(this)
    this.updateHeader = this.updateHeader.bind(this)
  }
  updateHeader() {
    const currentScrollPos =
      document.documentElement.scrollTop || document.body.scrollTop
    const up = currentScrollPos <= this.lastScrollPos

    if (up) {
      this.state.hide && this.setState({ hide: false })
    }

    if (currentScrollPos > 55) {
      !up && !this.state.hide && this.setState({ hide: true })
      !this.state.isFixed
        ? this.setState({ isFixed: true })
        : this.setState({ transition: true })
    }

    if (currentScrollPos === 0) {
      this.setState({ isFixed: false, hide: false, transition: false })
    }

    this.lastScrollPos = currentScrollPos
    this.isHandling = false
  }
  handleScroll() {
    if (!this.isHandling) {
      window.requestAnimationFrame(this.updateHeader)
      this.isHandling = true
    }
  }
  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
  render() {
    return (
      <HeaderMobile
        isFixed={this.state.isFixed}
        hide={this.state.hide}
        transition={this.state.transition}
      />
    )
  }
}
