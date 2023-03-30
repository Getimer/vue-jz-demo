import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';

import Journal from '@/views/Journal.vue'
import Labels from '@/views/Labels.vue'
import Count from '@/views/Count.vue'
import NotFound from '@/views/NotFound.vue'
const routes: Array<RouteRecordRaw> = [
    {
        path:'/journal',
        component:Journal
    },
    {
        path:'/',
        component:Journal
    },
    {
        path:'/labels',
        component:Labels
    },
    {
        path:'/count',
        component:Count
    },
    { path: '/:pathMatch(.*)*',  component: NotFound },
];


const router = createRouter({
    history: createWebHashHistory(),
    routes
});


export default router;
