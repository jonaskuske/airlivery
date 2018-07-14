const getAuthState = state => state.auth.isAuth
const getKnownUsers = state => state.auth.knownUsers

export default { getAuthState, getKnownUsers }
