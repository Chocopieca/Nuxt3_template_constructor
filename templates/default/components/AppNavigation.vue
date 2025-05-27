<template>
  <div class="flex items-center">
    <!-- Desktop Navigation -->
    <nav class="hidden md:flex items-center space-x-1">
      <template v-for="(item, index) in navigationConfig" :key="index">
        <!-- Regular menu item -->
        <UButton 
          v-if="!item.children"
          :to="item.to"
          variant="link"
          :ui="{
            base: 'relative px-4 py-2'
          }"
          :class="[
            'text-gray-300 hover:text-warning-500 active:text-primary-500 transition-colors duration-200',
            { 'text-warning-500': isActive(item.to) }
          ]"
        >
          {{ item.label }}
          <div 
            v-if="isActive(item.to)"
            class="absolute bottom-0 left-0 w-full h-0.5 bg-warning-500 rounded-full"
          />
        </UButton>

        <!-- Dropdown menu item -->
        <div 
          v-else
          class="relative"
          @mouseenter="activeSubmenu = item.label"
          @mouseleave="activeSubmenu = null"
        >
          <UButton 
            :to="item.to"
            variant="link"
            :ui="{
              base: 'relative px-4 py-2'
            }"
            :class="[
              'text-gray-300 hover:text-warning-500 active:text-primary-500 transition-colors duration-200',
              { 'text-warning-500': isActive(item.to) }
            ]"
          >
            {{ item.label }}
            <div 
              v-if="isActive(item.to)"
              class="absolute bottom-0 left-0 w-full h-0.5 bg-warning-500 rounded-full"
            />
          </UButton>
          
          <!-- Submenu -->
          <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <div 
              v-if="activeSubmenu === item.label"
              class="absolute top-full left-0 mt-2 w-48 bg-secondary-500 backdrop-blur-sm rounded-lg shadow-lg py-2 border"
            >
              <UButton 
                v-for="(subItem, subIndex) in item.children"
                :key="subIndex"
                :to="subItem.to"
                variant="link"
                :ui="{
                  base: 'w-full justify-start px-4 py-2'
                }"
                :class="[
                  'text-white hover:text-warning-500 active:text-primary-500 transition-colors duration-200',
                  { 'text-warning-500': isActive(subItem.to) }
                ]"
              >
                {{ subItem.label }}
              </UButton>
            </div>
          </Transition>
        </div>
      </template>

      <!-- CTA Button Slot -->
      <slot name="cta" />
    </nav>

    <!-- Mobile menu button -->
    <UButton
      icon="i-heroicons-bars-3"
      color="neutral"
      variant="link"
      class="md:hidden text-gray-300 hover:text-warning-500"
      @click="toggleMobileMenu"
    />

    <!-- Mobile menu overlay -->
    <Transition
      enter-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="isMobileMenuOpen" 
        class="md:hidden fixed inset-0 bg-black/50 z-40"
        @click="closeMobileMenu"
      />
    </Transition>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform translate-x-full"
      enter-to-class="transform translate-x-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-x-0"
      leave-to-class="transform translate-x-full"
    >
      <div 
        v-if="isMobileMenuOpen" 
        class="md:hidden fixed inset-y-0 right-0 w-64 bg-secondary-500 z-50"
        @click.stop
      >
        <!-- Main menu -->
        <div v-if="!activeMobileSubmenu" class="h-full flex flex-col">
          <div class="flex justify-between items-center p-4 border-b border-secondary-600">
            <h2 class="text-xl font-bold text-white">{{ t('components.navigation.menu') }}</h2>
            <UButton
              icon="i-heroicons-x-mark"
              color="neutral"
              variant="link"
              class="text-gray-300 hover:text-warning-500"
              @click="closeMobileMenu"
            />
          </div>
          
          <nav class="flex-1 overflow-y-auto">
            <UButton 
              v-for="(item, index) in navigationConfig" 
              :key="index"
              variant="link"
              :to="item.to"
              :ui="{
                base: 'w-full justify-start px-4 py-3'
              }"
              :class="[
                'text-white hover:text-warning-500 active:text-primary-500 transition-colors duration-200 rounded-none border-b border-secondary-600',
                { 'text-warning-500': isActive(item.to) }
              ]"
              @click="item.children ? (activeMobileSubmenu = item) : closeMobileMenu()"
            >
              <div class="flex items-center justify-between w-full">
                <span>{{ item.label }}</span>
                <UIcon 
                  v-if="item.children"
                  name="i-heroicons-chevron-right"
                  class="w-5 h-5"
                />
              </div>
            </UButton>
          </nav>
        </div>

        <!-- Submenu -->
        <div v-else class="h-full flex flex-col">
          <div class="flex items-center p-4 border-b border-secondary-600">
            <UButton
              icon="i-heroicons-arrow-left"
              color="neutral"
              variant="link"
              class="text-gray-300 hover:text-warning-500 mr-2"
              @click="activeMobileSubmenu = null"
            />
            <h2 class="text-xl font-bold text-white">{{ activeMobileSubmenu.label }}</h2>
          </div>
          
          <nav class="flex-1 overflow-y-auto">
            <UButton 
              v-for="(subItem, subIndex) in activeMobileSubmenu.children"
              :key="subIndex"
              :to="subItem.to"
              variant="link"
              :ui="{
                base: 'w-full justify-start px-4 py-3'
              }"
              :class="[
                'text-white hover:text-warning-500 active:text-primary-500 transition-colors duration-200 rounded-none border-b border-secondary-600',
                { 'text-warning-500': isActive(subItem.to) }
              ]"
              @click="closeMobileMenu"
            >
              {{ subItem.label }}
            </UButton>
          </nav>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { navigationConfig } from '~/config/site'

interface NavigationItem {
  label: string
  to: string
  children?: NavigationItem[]
}

const route = useRoute()
const { t } = useI18n()
const isMobileMenuOpen = ref(false)
const activeSubmenu = ref<string | null>(null)
const activeMobileSubmenu = ref<NavigationItem | null>(null)

const isActive = (path: string): boolean => {
  return route.path === path
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (!isMobileMenuOpen.value) {
    activeMobileSubmenu.value = null
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  activeMobileSubmenu.value = null
}

// Close mobile menu on route change
watch(() => route.path, () => {
  closeMobileMenu()
})

// Close mobile menu on escape key
const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isMobileMenuOpen.value) {
    closeMobileMenu()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
})

defineOptions({
  name: 'AppNavigation'
})
</script> 