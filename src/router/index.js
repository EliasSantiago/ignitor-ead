import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/Home.vue'
import MySupports from '@/views/supports/MySupports.vue'
import Lesson from '@/views/modules/Lesson.vue'
import Login from '@/views/auth/Login.vue'
import ForgotPassword from '@/views/auth/ForgotPassword.vue'
import ResetPassword from '@/views/auth/ResetPassword.vue'
import store from '@/store'
import { TOKEN_NAME } from '@/configs'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/recuperar-senha',
    name: 'forgot.password',
    component: ForgotPassword
  },
  {
    path: '/reset-password/:token',
    name: 'reset.password',
    component: ResetPassword,
    props: true
  },
  {
    path: '/campus',
    component: () => import('@/layouts/DefaultTemplate.vue'),
    children: [
      {
        path: 'modulos',
        name: 'campus.modules',
        component: Lesson
      },
      {
        path: 'minhas-duvidas',
        name: 'campus.my.supports',
        component: MySupports
      },
      {
        path: '',
        name: 'campus.home',
        component: Home
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, _, next) => {
  const loggedIn = store.state.users.loggedIn
  if (to.name !== 'reset.password' && !loggedIn) {
    const token = await localStorage.getItem(TOKEN_NAME)
    if (!token && to.name !== 'login' && to.name !== 'forgot.password') {
      return router.push({ name: 'login' })
    }
    await store.dispatch('getMe')
      .catch(() => {
        if (to.name != 'login') return router.push({ name: 'login' })
      })
  }
  next()
})

export default router
