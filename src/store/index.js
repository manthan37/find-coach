import { createStore } from 'vuex';
import coachesModule from './modules/coaches/index.js';
import requestModule from './modules/requests/index.js';

export default createStore({
  state(){
    return {
      userId: 'c3'
    };
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    coaches: coachesModule,
    requests: requestModule,
  },
  getters:{
    userId(state){
      return state.userId;
    }
  }
})
