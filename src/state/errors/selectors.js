const getUnseenErrors = (state) => state.errors.filter((err) => !err.seen)

const obj = {
  getUnseenErrors,
}

export default obj
