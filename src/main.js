import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'

import './assets/css/app.css'

const app = createApp(App)
app.config.globalProperties.$emitter = require('tiny-emitter/instance')
app.use(router).mount('#app')
