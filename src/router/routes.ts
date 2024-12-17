import {RouteRecordRaw} from "vue-router";
import Layout from '@/layout/default/index.vue'
export const LAYOUT = () => Promise.resolve(Layout)

export const constantRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/gameScene',
        component: LAYOUT,
        children: [
            {
                path: 'gameScene',
                component: () => import('@/views/scene/game.vue'),
                name: Symbol(),
                meta: {
                    title: '🔥'
                }
            }
        ]
    },
]
