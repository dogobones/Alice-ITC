import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import Ionic from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css';

Vue.use(Ionic);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

//If limit watches exceded, look https://askubuntu.com/questions/716431/inotify-max-user-watches-value-resets-on-reboot-how-to-change-it-permanently
