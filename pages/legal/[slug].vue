<template>
    <div class="legal-page">
        <div class="grid-pattern"></div>
        <div class="glowing-orb orb-1"></div>
        <div class="glowing-orb orb-2"></div>

        <section class="legal-section">
            <div class="legal-container">
                <!-- Main Title -->
                <div class="title-container">
                    <h1 class="glitch-text">{{ t(`legalPage.${slug}.title`) }}</h1>
                    <p class="fade-in-text">{{ t(`legalPage.${slug}.description`) }}</p>
                </div>

                <div class="legal-content">
                    <div v-for="(section, key) in tm(`legalPage.${slug}.sections`)" :key="key" class="section-card">
                        <h2 class="section-title">{{ rt(section.title) }}</h2>
                        <p class="section-content">{{ rt(section.content) }}</p>
                        
                        <div v-if="section.items?.length" class="items-container">
                            <div v-for="(item, itemKey) in section.items" :key="itemKey" class="item-card">
                                <strong class="item-title">{{ rt(item.title) }}</strong>
                                <p class="item-description">{{ rt(item.description) }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Contact Information -->
                <div class="contact-section">
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
                        <NuxtImg 
                            src="/18.png" 
                            alt="18+" 
                            class="icon-image"
                            width="32"
                            height="32"
                            loading="lazy"
                        />
                    </a>
                    <a href="https://gamblershelp.com.au/" class="disclaimer-icon">
                        <NuxtImg 
                            src="/gamhelp.webp" 
                            alt="Gambler's Help" 
                            class="icon-image"
                            width="32"
                            height="32"
                            loading="lazy"
                        />
                    </a>
                    <a href="https://resetapp.com.au/" class="disclaimer-icon">
                        <NuxtImg 
                            src="/reSet.webp" 
                            alt="Reset Self-Exclusion" 
                            class="icon-image"
                            width="32"
                            height="32"
                            loading="lazy"
                        />
                    </a>
                    <a href="https://www.gambleaware.org/" class="disclaimer-icon">
                        <NuxtImg 
                            src="/gambaware.svg" 
                            alt="GambleAware" 
                            class="icon-image"
                            width="32"
                            height="32"
                            loading="lazy"
                        />
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
    background-color: var(--color-nightfall);
    padding: 40px 20px;
    position: relative;
    overflow: hidden;
}

.grid-pattern {
    position: absolute;
    inset: 0;
    background-image: linear-gradient(var(--color-sci-fi) 1px, transparent 1px),
        linear-gradient(90deg, var(--color-sci-fi) 1px, transparent 1px);
    background-size: 50px 50px;
    opacity: 0.1;
    animation: gridMove 20s linear infinite;
}

.glowing-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(60px);
    opacity: 0.3;
    animation: orbFloat 8s ease-in-out infinite;
}

.orb-1 {
    width: 300px;
    height: 300px;
    background: var(--color-accent);
    top: 20%;
    left: 20%;
}

.orb-2 {
    width: 250px;
    height: 250px;
    background: var(--color-sci-fi);
    bottom: 20%;
    right: 20%;
    animation-delay: -4s;
}

.legal-section {
    max-width: 900px;
    margin: 0 auto;
    background: rgba(26, 26, 26, 0.8);
    padding: 40px;
    border-radius: 20px;
    border: 1px solid var(--color-sci-fi);
    box-shadow: 0 0 30px rgba(0, 122, 255, 0.2);
    backdrop-filter: blur(10px);
    position: relative;
    z-index: 1;
}

.title-container {
    text-align: center;
    margin-bottom: 3rem;
}

.legal-container h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--color-white);
    margin-bottom: 1.5rem;
    font-family: var(--font-heading);
}

.legal-container p {
    color: var(--color-text-secondary);
    line-height: 1.6;
}

.section-card {
    background: rgba(44, 44, 84, 0.3);
    border: 1px solid var(--color-sci-fi);
    border-radius: 12px;
    padding: 2rem;
    margin-bottom: 2rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.section-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 122, 255, 0.2);
}

.section-title {
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--color-white);
    margin-bottom: 1rem;
    font-family: var(--font-subheading);
}

.section-content {
    color: var(--color-text-secondary);
    margin-bottom: 1.5rem;
}

.items-container {
    display: grid;
    gap: 1.5rem;
    margin-top: 1.5rem;
}

.item-card {
    background: rgba(26, 26, 26, 0.5);
    border: 1px solid var(--color-sci-fi);
    border-radius: 8px;
    padding: 1.5rem;
    transition: transform 0.3s ease;
}

.item-card:hover {
    transform: translateX(10px);
}

.item-title {
    display: block;
    color: var(--color-accent);
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    font-family: var(--font-subheading);
}

.item-description {
    color: var(--color-text-secondary);
    margin: 0;
}

.contact-section {
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid var(--color-sci-fi);
}

.contact-info {
    display: grid;
    gap: 1.5rem;
}

.contact-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem;
    background: rgba(44, 44, 84, 0.3);
    border-radius: 8px;
    transition: transform 0.3s ease;
}

.contact-item:hover {
    transform: translateX(10px);
}

.contact-item i {
    font-size: 1.5rem;
    color: var(--color-accent);
}

.contact-item p {
    margin: 0;
    color: var(--color-text-secondary);
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

@keyframes gridMove {
    0% { transform: translateY(0); }
    100% { transform: translateY(50px); }
}

@keyframes orbFloat {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(20px, -20px); }
}

@media (max-width: 768px) {
    .legal-section {
        padding: 20px;
    }

    .legal-container h1 {
        font-size: 2rem;
    }

    .section-card {
        padding: 1.5rem;
    }

    .contact-item {
        padding: 0.75rem;
    }

    .disclaimer-icons {
        flex-wrap: wrap;
        gap: 1.5rem;
    }

    .icon-image {
        max-height: 50px;
    }
}
</style>