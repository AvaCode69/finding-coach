import { createStore } from 'vuex'
import authModule from './modules/auth/index'
import coachModule from './modules/coaches/index'
import requestsModule from './modules/requests/index'

const store = createStore({
  modules: {
    coaches: coachModule,
    requests: requestsModule,
    auth: authModule
  }
})

export default store
