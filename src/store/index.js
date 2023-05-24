import { createStore } from 'vuex'

export default createStore({
  state: {
    editing : null
  },
  getters: {
  },
  mutations: {
    setEditing(state, task){
      state.editing = task
    }
  },
  actions: {
  },
  modules: {
  }
})
