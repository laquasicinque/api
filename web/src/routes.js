// import addWorker from './components/addWorker.vue';
// import addCompany from './components/addCompany.vue';
// import listWorkers from './components/listWorkers.vue';
// import listCompanies from './components/listWorkers.vue';
// import Home from './'

const Home = require('./App.vue');
const addWorker = require('./components/addWorker.vue');
const addCompany = require('./components/addCompany.vue');
const listCompanies = require('./components/listWorkers.vue.vue');
const listWorkers = require('./components/listWorkers.vue');

export const routes = [
    { path: '/', component: Home},
    { path: '/add-worker', component: addWorker },
    { path: '/add-company', component: addCompany },
    { path: '/list-workers', component: listWorkers },
    { path: '/list-companies', component: listCompanies },
    ]