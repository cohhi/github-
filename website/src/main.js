import {createApp} from 'vue'
import App from './App.vue'
import element from 'element-plus'
import 'element-plus/dist/index.css'
import router from '@/router/index'
const app = createApp(App)
app.use(element)
app.use(router)
app.mount('#app')
