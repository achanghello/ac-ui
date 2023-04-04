import { createRouter,createWebHashHistory } from "vue-router";

import button from "../components/button.vue";
import layout from "../components/layout.vue";
import check from "../components/check.vue";
import message from "../components/message.vue"
import tab from "../components/tab.vue"
import input from "../components/input.vue"
const routes = [
    {
        path:'/',
        name:"Button",
        component:button
    },
    {
        path:'/layout',
        name:"layout",
        component:layout
    },
    {
        path:'/check',
        name:"check",
        component:check
    },
    {
        path:'/message',
        name:"message",
        component:message
    },
    {
        path:'/tab',
        name:"tab",
        component:tab
    },
    {
        path:'/input',
        name:"input",
        component:input
    }
]

let router;

export default router = createRouter({
    history:createWebHashHistory(),
    routes:routes
})