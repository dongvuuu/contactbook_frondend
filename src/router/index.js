import { createRouter, createWebHistory } from "vue-router";
import ContactBook from '../views/ContactBook.vue';

const routes = [
    { path: '/', component: ContactBook, name: 'contactbook' },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;