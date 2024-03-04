import DefaultLayout from '@/layouts/DefaultLayout.vue'
import HomeLayout from '@/layouts/HomeLayout.vue'
import {
  AUTH_ROUTE,
  CODE_ROUTE,
  CONFIRM_ROUTE,
  HOME_ROUTE,
  IAM_ROUTE,
  PROFILE_ROUTE,
  REGISTRATION_ROUTE
} from '@/utils/consts'
import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    path: HOME_ROUTE,
    name: 'home',
    component: () => import('@/pages/HomePage.vue'),
    meta: {
      auth: true,
      layout: HomeLayout
    }
  },
  {
    path: CODE_ROUTE,
    name: 'code',
    component: () => import('@/pages/CodePage.vue'),
    meta: {
      auth: false,
      layout: DefaultLayout
    }
  },
  {
    path: PROFILE_ROUTE,
    name: 'profile',
    component: () => import('@/pages/ProfilePage.vue'),
    meta: {
      auth: false,
      layout: DefaultLayout
    }
  },
  {
    path: IAM_ROUTE,
    name: 'iam',
    component: () => import('@/pages/IamPage.vue'),
    meta: {
      auth: true,
      layout: DefaultLayout
    }
  },
  {
    path: AUTH_ROUTE,
    name: 'auth',
    component: () => import('@/pages/AuthPage.vue'),
    meta: {
      auth: false,
      layout: DefaultLayout
    }
  },
  {
    path: REGISTRATION_ROUTE,
    name: 'registration',
    component: () => import('@/pages/AuthPage.vue'),
    meta: {
      auth: false,
      layout: DefaultLayout
    }
  },
  {
    path: CONFIRM_ROUTE,
    name: 'confirm',
    component: () => import('@/pages/ConfirmPage.vue'),
    meta: {
      auth: false,
      layout: DefaultLayout
    },
    children: [
      {
        path: '/confirm/phone',
        name: 'number',
        component: () => import('@/components/elements/confirm/ConfirmNumber.vue')
      },
      {
        path: '/confirm/email',
        name: 'email',
        component: () => import('@/components/elements/confirm/ConfirmEmail.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

router.beforeEach(async (to) => {
  const token = sessionStorage.getItem('token')
  if (to.meta.auth && !token) {
    return AUTH_ROUTE
  }
})

export default router
