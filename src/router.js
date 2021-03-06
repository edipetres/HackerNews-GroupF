import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import NewComments from './views/NewComments.vue'
import StoryComments from './views/StoryComments.vue'
import Submit from './views/Submit.vue'
import Ask from './views/Ask.vue'
import Show from './views/Show.vue'
import Jobs from './views/Jobs.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/newcomments',
      component: NewComments
    },
    {
      path: '/storycomments',
      component: StoryComments
    },
    {
      path: '/submit',
      component: Submit
    },
    { 
      path: '/show',
      component: Show
    },
    {
      path: '/ask',
      component: Ask
    },
    {
      path: '/jobs',
      component: Jobs
    }
  ]
})
