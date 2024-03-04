import './assets/main.css'
import 'vue-select/dist/vue-select.css';
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import naive from 'naive-ui';
import App from './App.vue'
import router from './router'
import uicomponents from '@/components/ui'
import firebaseConfig from '@/firebase/index'
import vSelect from 'vue-select'

import { initializeApp } from "firebase/app";
initializeApp(firebaseConfig)

const app = createApp(App)

app.use(naive)
app.use(createPinia())
app.use(router)
app.use(uicomponents)
app.component('v-select', vSelect)
app.mount('#app')
