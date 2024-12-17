import {createRouter, createWebHashHistory} from "vue-router";
import {constantRoutes} from "./routes.ts";

const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes,
})

router.beforeEach(async (to,from,next)=>{
    document.title = to?.meta.title
    next()
})

export default router
