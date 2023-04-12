import {createRouter, createWebHashHistory} from "vue-router";
import UserRepos from '@/components/userRepos.vue'

const routes = [
    {
        path: '/',
    },
    {
        path: '/userRepos',
        component: UserRepos
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router