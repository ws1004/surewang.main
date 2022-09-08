// src/main.ts
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createHead } from '@vueuse/head'

import NProgress from 'nprogress'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import App from './App.vue'
import routes from '~pages'

import './styles/main.css'
import './styles/prose.css'
import './styles/markdown.css'
import 'uno.css'

dayjs.extend(utc)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(() => {
  NProgress.start()
})
router.afterEach(() => {
  NProgress.done()
})

const app = createApp(App)
const head = createHead()

app.use(head)
app.use(router)
app.mount('#app')

