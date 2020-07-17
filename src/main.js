import Vue from 'vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import { routes } from './routes'
import { store } from './store/store';
import firebase from './firebase/firebase.utils';
import * as types from './store/types';

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueRouter)

const router = new VueRouter({ 
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { selector: to.hash };
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  console.log('beforeEach')
  const currentUser = firebase.auth().currentUser;
  console.log(currentUser)
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('dashboard')
  else next()
});

Vue.config.productionTip = false

let app;

firebase.auth().onAuthStateChanged(user => {
  console.log('hello')
  store.dispatch(types.CHECK_USER_SESSION, user);
  if(!app) app = new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app')
});

