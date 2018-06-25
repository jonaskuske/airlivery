const getUnseenErrors = state => state.errors.filter(err => !err.seen)

export default {
  getUnseenErrors,
}
