import Vue from 'vue'
import Vuex from 'vuex'
import Quiz from './quiz.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    quiz: Quiz,
    selectedQuiz: {}
  },
  mutations: {
    setSelectedQuiz (state, payload) {
      state.selectedQuiz = payload
    }
  },
  actions: {
    selectedQuiz ({ commit }, payload) {
      for (let i = 0; i < payload.questions.length; i++) {
        payload.questions[i].overlay = false
        //console.log(payload.questions[i])
      }
      commit('setSelectedQuiz', payload)
    }
  },
  getters: {
    loadedQuiz (state) {
      return state.quiz
    },
    selectedQuiz (state) {
      return state.selectedQuiz
    }
  }
})
