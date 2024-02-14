import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import uicomponents from '@/components/ui'
import firebaseConfig from '@/firebase/index'

import { initializeApp } from "firebase/app";
initializeApp(firebaseConfig)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(uicomponents)

app.mount('#app')
