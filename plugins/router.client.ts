import { createWebHashHistory } from 'vue-router'

export default defineNuxtPlugin(() => {
    const router = useRouter()
    router.options.history = createWebHashHistory()
})