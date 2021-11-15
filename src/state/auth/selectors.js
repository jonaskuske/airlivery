const getAuthState = (state) => state.auth.isAuth
const getKnownUsers = (state) => state.auth.knownUsers

const obj = { getAuthState, getKnownUsers }

export default obj
