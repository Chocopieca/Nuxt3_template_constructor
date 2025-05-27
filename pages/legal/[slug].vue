<template>
    <div class="legal-page">
        <section class="legal-section">
            <div class="legal-container">
                <!-- Main Title -->
                <div class="max-w-4xl mx-auto text-center mb-16">
                    <h1 class="text-5xl font-bold mb-8 text-gray-800">{{ t(`legalPage.${slug}.title`) }}</h1>
                    <p class="text-xl text-gray-600">{{ t(`legalPage.${slug}.description`) }}</p>
                </div>

                <div class="legal-content">
                    <div v-for="(section, key) in tm(`legalPage.${slug}.sections`)" :key="key" class="mb-8">
                        <h2 class="text-2xl font-semibold mb-4">{{ rt(section.title) }}</h2>
                        <p class="mb-4">{{ rt(section.content) }}</p>
                        
                        <div v-if="section.items?.length" class="pl-4">
                            <div v-for="(item, itemKey) in section.items" :key="itemKey" class="mb-4">
                                <strong class="block mb-2">{{ rt(item.title) }}</strong>
                                <p>{{ rt(item.description) }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Contact Information -->
                <div class="contact-section mt-8">
                    <div class="contact-info">
                        <div class="contact-item">
                            <i class="i-heroicons-map-pin"></i>
                            <div>
                                <p>{{ contactConfig.location.address.street }}</p>
                                <p>{{ contactConfig.location.address.city }}, {{ contactConfig.location.address.state }} {{ contactConfig.location.address.postcode }}</p>
                                <p>{{ contactConfig.location.address.country }}</p>
                            </div>
                        </div>

                        <div class="contact-item">
                            <i class="i-heroicons-phone"></i>
                            <p>{{ contactConfig.phone }}</p>
                        </div>

                        <div class="contact-item">
                            <i class="i-heroicons-envelope"></i>
                            <p>{{ contactConfig.email }}</p>
                        </div>
                    </div>
                </div>

                <!-- Disclaimer Icons Section -->
                <div v-if="slug === 'disclaimer'" class="disclaimer-icons mt-8">
                    <a href="#" class="disclaimer-icon">
                        <img src="/18.png" alt="18+" class="icon-image" />
                    </a>
                    <a href="https://gamblershelp.com.au/" class="disclaimer-icon">
                        <img src="/gamhelp.webp" alt="Gambler's Help" class="icon-image" />
                    </a>
                    <a href="https://resetapp.com.au/" class="disclaimer-icon">
                        <img src="/reSet.webp" alt="Reset Self-Exclusion" class="icon-image" />
                    </a>
                    <a href="https://www.gambleaware.org/" class="disclaimer-icon">
                        <img src="/gambaware.svg" alt="GambleAware" class="icon-image" />
                    </a>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { contactConfig } from '~/config/site'

const { t, tm, rt } = useI18n()
const route = useRoute()
const slug = computed(() => route.params.slug)

// SEO meta
useSeoMeta({
    title: () => t(`legalPage.${slug.value}.title`),
    description: () => t(`legalPage.${slug.value}.description`)
})
</script>

<style scoped>
.legal-page {
    min-height: 100vh;
    background-color: #f8f9fa;
    padding: 40px 20px;
}

.legal-section {
    max-width: 900px;
    margin: 0 auto;
    background-color: #fff;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.legal-container {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #444;
}

.legal-container :deep(h1) {
    font-size: 2.5rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 2rem;
    text-align: center;
}

.legal-container :deep(h2) {
    font-size: 1.8rem;
    font-weight: 600;
    color: #333;
    margin: 2rem 0 1rem;
}

.legal-container :deep(p) {
    margin-bottom: 1rem;
}

.not-found {
    text-align: center;
    color: #666;
    font-size: 1.2rem;
    padding: 2rem;
}

/* Contact Section Styles */
.contact-section {
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid #eee;
}

.contact-info {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.contact-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
}

.contact-item i {
    font-size: 1.5rem;
    color: #666;
    margin-top: 0.25rem;
}

.contact-item p {
    margin: 0;
    line-height: 1.5;
}

/* Disclaimer Icons Styles */
.disclaimer-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid #eee;
}

.disclaimer-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
}

.disclaimer-icon:hover {
    transform: translateY(-5px);
}

.icon-image {
    max-height: 60px;
    width: auto;
    object-fit: contain;
}

@media (max-width: 768px) {
    .legal-section {
        padding: 20px;
    }

    .legal-container :deep(h1) {
        font-size: 2rem;
    }

    .legal-container {
        font-size: 1rem;
    }

    .disclaimer-icons {
        flex-wrap: wrap;
        gap: 1.5rem;
    }

    .icon-image {
        max-height: 50px;
    }

    .contact-item {
        gap: 0.75rem;
    }

    .contact-item i {
        font-size: 1.25rem;
    }
}
</style>