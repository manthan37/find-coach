import { createStore } from 'vuex';
import coachesModule from './modules/coaches/index.js';

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
  },
  getters:{
    userId(state){
      return state.userId;
    }
  }
})
