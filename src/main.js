import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHashHistory } from 'vue-router'
import FontAwesomeIcon from "@/utilities/fontawesome-icons";
import { createPinia } from 'pinia'

const app = createApp(App)

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

app.component("font-awesome-icon", FontAwesomeIcon).use(router).use(createPinia()).mount('#app')
