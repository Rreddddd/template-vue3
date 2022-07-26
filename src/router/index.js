import {createRouter, createWebHashHistory} from "vue-router"

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: () => import('../views/Home.vue')},
        {path: '/leaveMessage', component: () => import('../views/LeaveMessage.vue')},
    ]
})