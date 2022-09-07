// src/main.ts
import { ViteSSG } from 'vite-ssg'
import NProgress from 'nprogress'
import router from 'pages-generated'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import App from './App.vue'

import './styles/main.css'
import './styles/prose.css'
import './styles/markdown.css'
import 'uno.css'

dayjs.extend(utc)

const routes = [...router]

export const createApp = ViteSSG(
  App,
  { routes },
  ({ router, isClient }) => {
    if (isClient) {
      router.beforeEach(() => { NProgress.start() })
      router.afterEach(() => { NProgress.done() })
    }
  },
)

