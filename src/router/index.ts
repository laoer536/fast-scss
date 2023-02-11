// vite-env.d.ts
/// <reference types="vite-plugin-pages/client" />
import { createRouter } from 'vue-router'
import routes from '~pages'
import { createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes,
})

export default router
