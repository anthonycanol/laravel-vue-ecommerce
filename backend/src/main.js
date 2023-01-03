import { createApp } from 'vue'
import router from './router'
import './index.css'
import App from './App.vue'

createApp(App)
.use(router)
.mount('#app')
