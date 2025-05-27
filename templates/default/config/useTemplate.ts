import { ref } from 'vue'
import { templates, type TemplateConfig } from './template'

const currentTemplate = ref<TemplateConfig>(templates.default)

export function useTemplate() {
  const setTemplate = (templateName: keyof typeof templates) => {
    if (templates[templateName]) {
      currentTemplate.value = templates[templateName]
    }
  }

  const isFeatureEnabled = (feature: keyof TemplateConfig['features']) => {
    return currentTemplate.value.features[feature]
  }

  const isLayoutEnabled = (layout: keyof TemplateConfig['layouts']) => {
    return currentTemplate.value.layouts[layout]
  }

  const isComponentEnabled = (component: keyof TemplateConfig['components']) => {
    return currentTemplate.value.components[component]
  }

  const getCurrentTemplate = () => currentTemplate.value

  return {
    setTemplate,
    isFeatureEnabled,
    isLayoutEnabled,
    isComponentEnabled,
    getCurrentTemplate
  }
} 