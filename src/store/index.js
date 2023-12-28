import { createStore } from 'vuex'

import coachModules from './modules/coaches/index'
import requestsModules from './modules/coaches/index'

const store = createStore({
  modules: {
    coaches: coachModules,
    requests: requestsModules
  }
})

export default store
