import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import axios from 'axios'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


axios.defaults.baseURL =  'http://127.0.0.1:8000/'

//axios.defaults.baseURL =  'https://ipay.pythonanywhere.com/'

createApp(App).use(store).use(router).mount('#app')
