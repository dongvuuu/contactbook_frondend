import { createRouter, createWebHistory } from "vue-router";
import ContactBook from '../views/ContactBook.vue';
import NotFound from '../views/NotFound.vue';
import ContactEdit from '../views/ContactEdit.vue';

const routes = [
    { path: '/', component: ContactBook, name: 'contactbook' },
    // { patch: '/:patchMatch(.*)*', component: NOTFOUND, name: 'notfound' },
    { path: '/:pathMatch(.*)*', name: 'notfound', component: () => import("@/views/NotFound.vue"), },
    //{ patch: '/contacts/:id', name: 'contact.edit', component: ContactEdit, props: true },
    { path: '/contacts/:id', name: 'contact.edit', component: () => import("@/views/ContactEdit.vue"), props: true },
    { path: '/contacts/add', name: 'contact.add', component: () => import("@/views/ContactAdd.vue") },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;