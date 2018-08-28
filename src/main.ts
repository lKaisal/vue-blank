// import * as Sentry from '@sentry/browser'

// polyfills
import 'whatwg-fetch' // native js fetch polyfill
import 'svgxuse' // ie 11 svg use fix

import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
// import '@/registerServiceWorker'

// if (process.env.NODE_ENV === 'production') {
//   Sentry.init({
//     dsn: ''
//   })
// }

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
