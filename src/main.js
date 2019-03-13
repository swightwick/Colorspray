import Vue from 'vue'
import App from './App.vue'
import VideoBg from 'vue-videobg'


Vue.config.productionTip = false
Vue.component('video-bg', VideoBg)

new Vue({
  render: h => h(App),
}).$mount('#app')
