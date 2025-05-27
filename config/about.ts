import type { ImageConfig } from './site'

// About page sections configuration
export const aboutSectionsConfig = {
  whoWeAre: {
    enabled: true,
    order: 1
  },
  missionVision: {
    enabled: true,
    order: 2
  },
  values: {
    enabled: true,
    order: 3
  },
  testimonials: {
    enabled: true,
    order: 4
  },
  cta: {
    enabled: true,
    order: 5
  }
}

// About page images configuration
export const aboutImages: Record<string, ImageConfig> = {
  'Who We Are': {
    src: '/img/photo_2025-05-23_00-32-53.jpg',
    alt: 'Elegant Space Designs - Professional Web Design Agency'
  },
  'Our Mission': {
    src: '/img/photo_2025-05-23_00-32-56.jpg',
    alt: 'Elegant Space Designs Mission'
  },
  'Our Vision': {
    src: '/img/photo_2025-05-23_00-32-59.jpg',
    alt: 'Elegant Space Designs Vision'
  },
  'Our Values': {
    src: '/img/photo_2025-05-23_00-33-02.jpg',
    alt: 'Elegant Space Designs Core Values'
  }
}

// About page icons configuration
export const aboutIcons = {
  // Main sections icons
  'Who We Are': 'i-mdi-office-building',
  'Our Mission': 'i-mdi-target',
  'Our Vision': 'i-mdi-lightbulb-on',
  'Our Values': 'i-mdi-account-group',
  
  // Values section icons
  'Innovation': 'i-mdi-lightbulb',
  'Excellence': 'i-mdi-star',
  'Integrity': 'i-mdi-shield-check',
  'Collaboration': 'i-mdi-account-group'
}
