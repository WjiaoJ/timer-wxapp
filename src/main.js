import 'core-js/es/string/pad-start'

import Vue from 'vue'
import App from './App'

import store from './common/store'
import './styles/app.scss'
import './styles/iconfont.css'
import './common/extend-vue'

import { initAudioPlay } from './common/utils'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.$store = store
const app = new Vue({
  store,
  ...App
})

app.$mount()

wx.setInnerAudioOption({ obeyMuteSwitch: false })

initAudioPlay()
