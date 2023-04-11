import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import sos from '@signageos/front-applet'

sos.onReady().then(() => {
  console.log('Ready to rock')
  createApp(App).mount('#app')
})