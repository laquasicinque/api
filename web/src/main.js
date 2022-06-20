import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import VueRouter from 'vue-router'
import { routes } from './routes'


const router = new VueRouter.createRouter({
    history: VueRouter.createWebHistory,
    routes
});

App.use(router);



createApp(App).mount('#app')
