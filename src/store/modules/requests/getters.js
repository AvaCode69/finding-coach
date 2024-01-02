export default {
  requests(state, _, _2, rootGetters) {
    const coachId = rootGetters.userId
    console.log('coachId', coachId)
    return state.requests.filter((req) => req.id === coachId)
  },
  hasRequests(_, getters) {
    return getters.requests && getters.requests.length > 0
  }
}
