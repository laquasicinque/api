import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import VueRouter from 'vue-router'
import Routes from './routes'

App.use(VueRouter);

const router = new VueRouter({
    routes: Routes
});

createApp(App).mount('#app')
