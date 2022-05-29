import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory} from 'vue-router'
import Home from './components/Home.vue'
import Sorting from './components/Sorting.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/sorting', component: Sorting }
]

// creating router instance and passing to the 'routes' option
const router = createRouter({
    // history implementation
    history: createWebHashHistory(),
    routes,
})

// Create and mounting the root instance
const app = createApp(App)

// Make sure to _use_ the router instance
// makes the whole app router-aware
app.use(router)

app.mount('#app')

