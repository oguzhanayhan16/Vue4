import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import AppLink from './components/AppLink.vue'


createApp(App).component('AppLink',AppLink).use(router).mount('#app')


