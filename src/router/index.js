import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { AUTH_ROUTE, CODE_ROUTE, CONFIRM_ROUTE, HOME_ROUTE, IAM_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE } from '@/utils/consts'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: HOME_ROUTE,
      name: 'home',
      component: () => import('@/pages/HomePage.vue'),
      meta: {
        layout: DefaultLayout
      }
    },
    {
      path: CODE_ROUTE,
      name: 'code',
      component: () => import('@/pages/CodePage.vue'),
      meta: {
        layout: DefaultLayout
      }
    },
    {
      path: PROFILE_ROUTE,
      name: 'profile',
      component: () => import('@/pages/ProfilePage.vue'),
      meta: {
        layout: DefaultLayout
      }
    },
    {
      path: IAM_ROUTE,
      name: 'iam',
      component: () => import('@/pages/IamPage.vue'),
      meta: {
        layout: DefaultLayout
      }
    },
    {
      path: AUTH_ROUTE,
      name: 'auth',
      component: () => import('@/pages/AuthPage.vue'),
      meta: {
        layout: DefaultLayout
      }
    },
    {
      path: REGISTRATION_ROUTE,
      name: 'registration',
      component: () => import('@/pages/AuthPage.vue'),
      meta: {
        layout: DefaultLayout
      }
    },
    {
      path: CONFIRM_ROUTE,
      name: 'confirm',
      component: () => import('@/pages/ConfirmPage.vue'),
      meta: {
        layout: DefaultLayout
      },
      children: [
        {
          path: '/confirm/phone',
          name: 'number',
          component: () => import('@/components/elements/confirm/ConfirmNumber.vue'),
        },
        { 
          path: '/confirm/email',
          name: 'email',
          component: () => import('@/components/elements/confirm/ConfirmEmail.vue'),
        }
      ]
    }
  ]
})

export default router

