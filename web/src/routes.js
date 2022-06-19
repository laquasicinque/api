import addWorker from './components/addWorker.vue';
import addCompany from './components/addCompany.vue';
import listWorkers from './components/listWorkers.vue';
import listCompanies from './components/listWorkers.vue';
import homePage from './components/homePage.vue';

export default [
    { path: '/', component: homePage},
    { path: '/add-worker', component: addWorker},
    { path: '/add-company', component: addCompany},
    { path: '/list-workers', component: listWorkers},
    { path: '/list-companies', component: listCompanies}
]