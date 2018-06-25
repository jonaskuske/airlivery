import types from './types'

const setMobileLayout = isMobile => ({
  type: types.SET_MOBILE_LAYOUT,
  mobile: isMobile,
})

export default {
  setMobileLayout,
}
