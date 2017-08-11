import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _76e0de2f = () => import('../../src/pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _5729036a = () => import('../../src/pages/about.vue' /* webpackChunkName: "pages/about" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _76e0de2f,
			name: "index"
		},
		{
			path: "/about",
			component: _5729036a,
			name: "about"
		}
    ],
    fallback: false
  })
}