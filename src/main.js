import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue'
import MyHome from './pages/MyHome.vue'
import MyFavorites from './pages/MyFavorites.vue'

const app = createApp(App)

const routes = [
  { path: '/', name: 'Home', component: MyHome },
  { path: '/favorites', name: 'Favorites', component: MyFavorites },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)
app.use(autoAnimatePlugin)

app.mount('#app')
