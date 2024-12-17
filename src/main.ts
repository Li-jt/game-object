import { createApp } from 'vue'
import './styles/index.scss'
import App from './App.vue'

import install from './install'

const app = createApp(App)

app.use(install)

app.mount('#app')
