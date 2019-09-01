import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Quiz from './views/Quiz.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      props: true,
      component: Home
    },
    {
      path: '/quiz',
      name: 'quiz',
      props: true,
      component: Quiz
    }
  ],
  mode: 'history'
})
