import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

Vue.use(Router)

export const routes = [
  {
    keynote: true,
    path: '/home',
    name: 'Home',
    component: require('@/pages/Home')
  },
  {
    keynote: true,
    path: '/what',
    name: 'What',
    component: require('@/pages/What')
  },
  {
    keynote: true,
    path: '/example',
    name: 'Example',
    component: require('@/pages/Example')
  },
  {
    keynote: true,
    path: '/why',
    name: 'Why',
    component: require('@/pages/Why')
  },
  {
    keynote: true,
    path: '/installation',
    name: 'Installation',
    component: require('@/pages/Installation')
  },
  {
    keynote: true,
    path: '/build-tool',
    name: 'Build Tool',
    component: require('@/pages/Build-tool')
  },
  {
    keynote: true,
    path: '/vue-router',
    name: 'Vue-router',
    component: require('@/pages/Vue-router')
  },
  {
    keynote: true,
    path: '/vuex',
    name: 'Vuex',
    component: require('@/pages/Vuex')
  },
  {
    keynote: true,
    path: '/one-way-data-flow',
    name: 'Vuex Flow',
    component: require('@/pages/One-way-data-flow')
  },
  {
    keynote: true,
    path: '/basic-idea-behind-vuex',
    name: 'Basic-idea-behind-vuex',
    component: require('@/pages/Basic-idea-behind-vuex')
  },
  {
    keynote: true,
    path: '/webpack',
    name: 'Webpack',
    component: require('@/pages/Webpack')
  },
  {
    keynote: true,
    path: '/notes',
    name: 'Notes',
    component: require('@/pages/Notes')
  },
  {
    keynote: true,
    path: '/standards',
    name: 'Standards',
    component: require('@/pages/Standards')
  },
  {
    keynote: true,
    path: '/vue-ssr',
    name: 'Vue-SSR',
    component: require('@/pages/Vue-ssr')
  },
  {
    keynote: true,
    path: '/useful-tool-for-vue',
    name: 'Useful-tool',
    component: require('@/pages/Useful-tool')
  },
  {
    keynote: true,
    path: 'vue-application-scenarios',
    name: 'Application-scenarios',
    component: require('@/pages/Application-scenarios')
  },
  {
    keynote: true,
    path: '/yarn',
    name: 'yarn',
    component: require('@/pages/Yarn')
  },
  {
    keynote: true,
    path: '/awesome-vue',
    name: 'Awesome Vue.js',
    component: require('@/pages/Awesome-vue')
  },
  {
    keynote: true,
    path: 'q-and-a',
    name: 'Q&A',
    component: require('@/pages/Q-and-a')
  },
  {
    keynote: true,
    path: '/thanks',
    name: 'Bye',
    component: require('@/pages/Bye')
  },

  { path: '*', redirect: { name: 'Home' } }
]

const pages = routes.filter(page => page.keynote).map(page => page.name )
store.dispatch('onFetch', {pages})

const router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes
})

router.beforeEach((to, from, next) => {
  store.dispatch('setPage', {name: to.name, pages})
  return next()
})

window.addEventListener('keydown', e => {
  const { which } = e
  if(which < 37 || which > 40) return

  e.preventDefault()
  if(which == 37 || which == 38) {
    return store.dispatch('onLast')
  }
  store.dispatch('onNext', {pages})
})

export default router
