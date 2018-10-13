import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueApollo from 'vue-apollo'
import { createProvider } from './vue-apollo'

Vue.config.productionTip = false
Vue.use(VueApollo)

new Vue({
  router,
  render: h => h(App),
  apolloProvider: createProvider(),

  created () {
    // Environment indicator
    if (process.env.NODE_ENV !== 'production') {
      let consoleStyle = (color, pos) => [ `background-color: ${color}`, 'color: white', 'padding: 1px 8px', `border-radius: ${pos === 'left' ? '4px 0 0 4px' : (pos === 'right' ? '0 4px 4px 0' : '0')}` ].join(';')
      console.log(`%cEnvironment%c${process.env.NODE_ENV}`, consoleStyle('#666', 'left'), consoleStyle('#8E6CF0', 'right'))
    }
  }
}).$mount('#app')
