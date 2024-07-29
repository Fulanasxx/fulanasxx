import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import CardDetail from '../views/CardDetail.vue';
import Como from '../views/Como.vue';
import Colocar from '../views/Colocar.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/card/:id',
        name: 'CardDetail',
        component: CardDetail,
        props: true
    },
    {
        path: '/como',
        name: 'Como',
        component: Como
    },
    {
        path: '/colocar',
        name: 'Colocar',
        component: Colocar
    }
];

const router = createRouter({
    history: createWebHistory('https://fulanasxx.github.io/fulanasxx/'), // Asegúrate de que el base URL sea correcto
    routes
});

export default router;