import { defineNuxtPlugin } from '#app'
import { useTemplate } from '~/templates/default/config/useTemplate'

export default defineNuxtPlugin(() => {
  const template = useTemplate()

  return {
    provide: {
      template
    }
  }
}) 