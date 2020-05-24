import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c9e8aff6 = () => interopDefault(import('..\\pages\\accordion.vue' /* webpackChunkName: "pages_accordion" */))
const _37db17aa = () => interopDefault(import('..\\pages\\alerts.vue' /* webpackChunkName: "pages_alerts" */))
const _616aa2fe = () => interopDefault(import('..\\pages\\buttons.vue' /* webpackChunkName: "pages_buttons" */))
const _96f3633a = () => interopDefault(import('..\\pages\\card.vue' /* webpackChunkName: "pages_card" */))
const _0416efd4 = () => interopDefault(import('..\\pages\\checkbox.vue' /* webpackChunkName: "pages_checkbox" */))
const _89fb7dba = () => interopDefault(import('..\\pages\\classes.vue' /* webpackChunkName: "pages_classes" */))
const _6899aab0 = () => interopDefault(import('..\\pages\\dialogs.vue' /* webpackChunkName: "pages_dialogs" */))
const _2f8d2fe4 = () => interopDefault(import('..\\pages\\docs.vue' /* webpackChunkName: "pages_docs" */))
const _4a87dec2 = () => interopDefault(import('..\\pages\\drawers.vue' /* webpackChunkName: "pages_drawers" */))
const _0716f43f = () => interopDefault(import('..\\pages\\dropdowns.vue' /* webpackChunkName: "pages_dropdowns" */))
const _5c36d59c = () => interopDefault(import('..\\pages\\examples.vue' /* webpackChunkName: "pages_examples" */))
const _5a687dec = () => interopDefault(import('..\\pages\\forms.vue' /* webpackChunkName: "pages_forms" */))
const _700d58ce = () => interopDefault(import('..\\pages\\grid.vue' /* webpackChunkName: "pages_grid" */))
const _533d0407 = () => interopDefault(import('..\\pages\\input.vue' /* webpackChunkName: "pages_input" */))
const _6bbc1c78 = () => interopDefault(import('..\\pages\\tables.vue' /* webpackChunkName: "pages_tables" */))
const _3578e1f8 = () => interopDefault(import('..\\pages\\toolbar.vue' /* webpackChunkName: "pages_toolbar" */))
const _8c854856 = () => interopDefault(import('..\\pages\\tos.vue' /* webpackChunkName: "pages_tos" */))
const _3b9f6548 = () => interopDefault(import('..\\pages\\example\\slider.vue' /* webpackChunkName: "pages_example_slider" */))
const _8545dde2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/accordion",
    component: _c9e8aff6,
    name: "accordion"
  }, {
    path: "/alerts",
    component: _37db17aa,
    name: "alerts"
  }, {
    path: "/buttons",
    component: _616aa2fe,
    name: "buttons"
  }, {
    path: "/card",
    component: _96f3633a,
    name: "card"
  }, {
    path: "/checkbox",
    component: _0416efd4,
    name: "checkbox"
  }, {
    path: "/classes",
    component: _89fb7dba,
    name: "classes"
  }, {
    path: "/dialogs",
    component: _6899aab0,
    name: "dialogs"
  }, {
    path: "/docs",
    component: _2f8d2fe4,
    name: "docs"
  }, {
    path: "/drawers",
    component: _4a87dec2,
    name: "drawers"
  }, {
    path: "/dropdowns",
    component: _0716f43f,
    name: "dropdowns"
  }, {
    path: "/examples",
    component: _5c36d59c,
    name: "examples"
  }, {
    path: "/forms",
    component: _5a687dec,
    name: "forms"
  }, {
    path: "/grid",
    component: _700d58ce,
    name: "grid"
  }, {
    path: "/input",
    component: _533d0407,
    name: "input"
  }, {
    path: "/tables",
    component: _6bbc1c78,
    name: "tables"
  }, {
    path: "/toolbar",
    component: _3578e1f8,
    name: "toolbar"
  }, {
    path: "/tos",
    component: _8c854856,
    name: "tos"
  }, {
    path: "/example/slider",
    component: _3b9f6548,
    name: "example-slider"
  }, {
    path: "/",
    component: _8545dde2,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
