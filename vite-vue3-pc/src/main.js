import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//模拟接口
import './plugins/mock'

const app  = createApp(App)
app.use(store)
app.use(router )
app.use(ElementPlus)
app.mount('#app')
