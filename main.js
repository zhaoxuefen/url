import App from './App'

//  #ifdef H5
	console.log("h5应用")
// #endif
// #ifdef MP-WEIXIN
	console.log("微信应用")
// #endif
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
import uView from "uview-ui";
Vue.use(uView);
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif