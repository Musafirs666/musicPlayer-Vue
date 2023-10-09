import './assets/css/main.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './components/store/loginStore.js'

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
