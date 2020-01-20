import Vue from 'vue'
import App from './App.vue'
import vmodal from 'vue-js-modal'
import VueYouTubeEmbed from 'vue-youtube-embed'
Vue.use(VueYouTubeEmbed)
Vue.use(vmodal)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
