import {createRouter, createWebHistory} from "vue-router";
import {constantRoutes} from "./routes.ts";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: constantRoutes,
})

router.beforeEach(async (to,from,next)=>{
    document.title = to?.meta.title
    next()
})

export default router
