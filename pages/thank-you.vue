<template>
  <div class="thank-you-section">
    <!-- Background Elements -->
    <div class="grid-pattern"></div>
    <div class="glowing-orb orb-1"></div>
    <div class="glowing-orb orb-2"></div>
    
    <div class="container">
      <div class="thank-you-box">
        <!-- Success Icon -->
        <div class="success-icon">
          <div class="checkmark"></div>
        </div>

        <h2 class="glitch-text">{{ t('thankYouPage.title') }}</h2>
        <p class="fade-in-text">{{ t('thankYouPage.description') }}</p>
        <p class="fade-in-text delay-1">{{ t('thankYouPage.additionalInfo') }}</p>
        
        <!-- Sci-fi Loading Animation -->
        <div class="loading-animation">
          <div class="loading-circle">
            <div class="loading-circle-inner"></div>
              </div>
          <div class="loading-particles">
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
          </div>
        </div>

        <NuxtLink to="/">
          <button class="home-btn">
            <span class="btn-text">{{ t('thankYouPage.buttonText') }}</span>
            <div class="btn-glow"></div>
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n()

// SEO meta
useSeoMeta({
  title: () => t('thankYouPage.meta.title'),
  description: () => t('thankYouPage.meta.description')
})
</script>

<style scoped>
.thank-you-section {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: var(--color-nightfall);
  padding: 2rem;
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

.thank-you-box {
  margin: 0 auto;
  max-width: 600px;
  padding: 3rem;
  border-radius: 20px;
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid var(--color-sci-fi);
  box-shadow: 0 0 30px rgba(0, 122, 255, 0.2);
  backdrop-filter: blur(10px);
  position: relative;
  z-index: 1;
}

.success-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 2rem;
  position: relative;
}

.checkmark {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: block;
  stroke-width: 2;
  stroke: var(--color-accent);
  stroke-miterlimit: 10;
  box-shadow: inset 0px 0px 0px var(--color-accent);
  animation: fill 0.4s ease-in-out 0.4s forwards, scale 0.3s ease-in-out 0.9s both;
}

.checkmark:before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 20px;
  border-left: 4px solid var(--color-accent);
  border-bottom: 4px solid var(--color-accent);
  transform: rotate(-45deg);
  animation: checkmark 0.5s ease-in-out 0.9s forwards;
  opacity: 0;
}

.thank-you-box h2 {
  font-size: 2.5rem;
  color: var(--color-white);
  margin-bottom: 1.5rem;
  font-weight: 700;
  font-family: var(--font-heading);
}

.thank-you-box p {
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.loading-animation {
  margin: 2rem auto;
  position: relative;
  width: 100px;
  height: 100px;
}

.loading-circle {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid var(--color-sci-fi);
  border-radius: 50%;
  animation: rotate 2s linear infinite;
}

.loading-circle-inner {
  position: absolute;
  width: 80%;
  height: 80%;
  top: 10%;
  left: 10%;
  border: 2px solid var(--color-accent);
  border-radius: 50%;
  animation: rotate 1.5s linear infinite reverse;
}

.loading-particles {
  position: absolute;
  width: 100%;
  height: 100%;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--color-accent);
  border-radius: 50%;
  animation: particleFloat 3s ease-in-out infinite;
}

.particle:nth-child(1) { top: 20%; left: 20%; animation-delay: 0s; }
.particle:nth-child(2) { top: 60%; left: 70%; animation-delay: -1s; }
.particle:nth-child(3) { top: 70%; left: 30%; animation-delay: -2s; }

.home-btn {
  margin-top: 2rem;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  color: var(--color-white);
  background: var(--color-accent);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  font-family: var(--font-subheading);
}

.home-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 20px rgba(255, 59, 48, 0.4);
}

.home-btn:active {
  transform: scale(0.98);
}

.btn-glow {
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, var(--color-accent), var(--color-sci-fi));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.home-btn:hover .btn-glow {
  opacity: 0.2;
}

@keyframes gridMove {
  0% { transform: translateY(0); }
  100% { transform: translateY(50px); }
}

@keyframes orbFloat {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(20px, -20px); }
}

@keyframes fill {
  100% { box-shadow: inset 0px 0px 0px 30px var(--color-accent); }
}

@keyframes scale {
  0%, 100% { transform: none; }
  50% { transform: scale3d(1.1, 1.1, 1); }
}

@keyframes checkmark {
  0% { opacity: 0; transform: rotate(-45deg) scale(0.5); }
  100% { opacity: 1; transform: rotate(-45deg) scale(1); }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes particleFloat {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(10px, -10px); }
}

.fade-in-text {
  opacity: 0;
  animation: fadeIn 0.5s ease-out forwards;
  }

.delay-1 {
  animation-delay: 0.3s;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style> 