import Vue from 'vue'
import App from './App.vue'
import Test from './TestComp.vue'
/*import VueRouter from "Vue-router"
import { router } from './routes'
Vue.use(VueRouter)*/
Vue.component('TestComp',Test)
/*const router = new VueRouter({
  router
});*/
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  /*router,*/
}).$mount('#app')
