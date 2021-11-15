import store from '../store'

import { userActions } from '../state/user'
import { authSelectors, authActions } from '../state/auth'
const { getKnownUsers } = authSelectors

export const login = ({ user, password }) => {
  const users = getKnownUsers(store.getState())
  const matchingUser = users.find(
    (u) =>
      u.password === password &&
      (u.name === user.trim() || u.email === user.trim()),
  )
  return new Promise((resolve, reject) => {
    if (matchingUser) {
      store.dispatch(userActions.setActiveUser(matchingUser))
      store.dispatch(authActions.login())

      return resolve(matchingUser)
    } else return reject()
  })
}

export const logout = () => {
  store.dispatch(authActions.logout())
  store.dispatch(userActions.removeActiveUser())
}

const obj = { login, logout }
export default obj
