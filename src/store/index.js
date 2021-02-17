import { createStore } from 'vuex';
import coachesModule from './modules/coaches/index.js';
import requestModule from './modules/requests/index.js';
import authModule from './modules/auth/index.js';

export default createStore({
  
  mutations: {
  },
  actions: {
  },
  modules: {
    coaches: coachesModule,
    requests: requestModule,
    auth: authModule,
  },
})
