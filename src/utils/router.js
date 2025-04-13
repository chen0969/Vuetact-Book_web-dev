import { createRouter, createWebHistory } from 'vue-router';

import Home from '../routes/Home.vue';
import Contacts from '../routes/Contacts.vue';
import SingleUser from '../routes/SingleUser.vue';
import SingleEdit from '../routes/SingleEdit.vue';
import SingleAdd from '../routes/SingleAdd.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/contacts',
            component: Contacts
        },
        {
            path: '/add',
            component: SingleAdd
        },
        {
            path: '/user/:id',
            component: SingleUser
        },
        {
            path: '/edit/:id',
            component: SingleEdit
        }
    ]
});

export default router;

