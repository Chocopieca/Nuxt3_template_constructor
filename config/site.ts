import { SERVICES, SERVICE_ROUTES } from '~/constants/services'
import { LEGAL, LEGAL_ROUTES } from '~/constants/legal'
import { BENEFIT_IMAGES } from '~/constants/home'

// Common interfaces
export interface NavItem {
  label: string
  to: string
  children?: NavItem[]
}

export interface ImageConfig {
  src: string
  alt: string
}

export interface LogoConfig {
  icon: string
  text: string
  color: string
}

export interface HomeSectionConfig {
  enabled: boolean
  order?: number
}


// Logo configuration
export const logoConfig: LogoConfig = {
  icon: 'i-mdi-gamepad-variant',
  text: 'Killing Floor: Calamity',
  color: 'text-accent'
}

// Home page sections configuration
export const homeSectionsConfig: { [key: string]: HomeSectionConfig } = {
  hero: {
    enabled: true,
    order: 1
  },
  gameplay: {
    enabled: true,
    order: 2
  },
  gallery: {
    enabled: true,
    order: 3
  },
  features: {
    enabled: true,
    order: 4
  },
  testimonials: {
    enabled: true,
    order: 5
  },
  contact: {
    enabled: true,
    order: 6
  }
}

// Image configurations
export const benefitsImages: Record<string, ImageConfig> = {
  [BENEFIT_IMAGES.BUSINESS_FOCUS]: {
    src: '/img/photo_2025-05-23_00-08-17.jpg',
    alt: BENEFIT_IMAGES.BUSINESS_FOCUS
  },
  [BENEFIT_IMAGES.EXPERT_SOLUTIONS]: {
    src: '/img/photo_2025-05-23_00-08-27.jpg',
    alt: BENEFIT_IMAGES.EXPERT_SOLUTIONS
  },
  [BENEFIT_IMAGES.INNOVATIVE_APPROACH]: {
    src: '/img/photo_2025-05-23_00-08-40.jpg',
    alt: BENEFIT_IMAGES.INNOVATIVE_APPROACH
  }
}

export const servicesImages: Record<string, ImageConfig> = {
  [SERVICES.WEB_DESIGN]: {
    src: '/img/photo_2025-05-23_00-08-44.jpg',
    alt: SERVICES.WEB_DESIGN
  },
  [SERVICES.BRAND_IDENTITY]: {
    src: '/img/photo_2025-05-23_00-08-50.jpg',
    alt: SERVICES.BRAND_IDENTITY
  },
  [SERVICES.UI_UX_DESIGN]: {
    src: '/img/photo_2025-05-23_00-08-56.jpg',
    alt: SERVICES.UI_UX_DESIGN
  },
  [SERVICES.PRINT_DESIGN]: {
    src: '/img/photo_2025-05-23_00-08-40.jpg',
    alt: SERVICES.PRINT_DESIGN
  },
  [SERVICES.MOTION_DESIGN]: {
    src: '/img/photo_2025-05-23_00-33-02.jpg',
    alt: SERVICES.MOTION_DESIGN
  }
}

// Navigation configuration
export const navigationConfig: NavItem[] = [
  {
    label: 'Contact',
    to: '/#contact'
  },
  {
    label: 'Privacy Policy',
    to: '/legal/privacy'
  }
]

// Footer configuration
export const footerConfig = {
  sections: [
    {
      title: 'Services',
      links: [
        { label: 'Web Design', to: SERVICE_ROUTES[SERVICES.WEB_DESIGN] },
        { label: 'Brand Identity', to: SERVICE_ROUTES[SERVICES.BRAND_IDENTITY] },
        { label: 'UI/UX Design', to: SERVICE_ROUTES[SERVICES.UI_UX_DESIGN] },
        { label: 'Print Design', to: SERVICE_ROUTES[SERVICES.PRINT_DESIGN] },
        { label: 'Motion Design', to: SERVICE_ROUTES[SERVICES.MOTION_DESIGN] }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About', to: '/about' },
        { label: 'Contact', to: '/contact' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', to: LEGAL_ROUTES[LEGAL.PRIVACY] },
        // { label: 'Terms of Service', to: LEGAL_ROUTES[LEGAL.TERMS] },
        // { label: 'Cookie Policy', to: LEGAL_ROUTES[LEGAL.COOKIES] },
        // { label: 'Disclaimer', to: LEGAL_ROUTES[LEGAL.DISCLAIMER] }
      ]
    }
  ],
  social: [
    {
      icon: 'i-simple-icons-linkedin',
      href: '#',
      label: 'LinkedIn'
    },
    {
      icon: 'i-simple-icons-twitter',
      href: '#',
      label: 'Twitter'
    },
    {
      icon: 'i-simple-icons-facebook',
      href: '#',
      label: 'Facebook'
    }
  ]
}

// Contact information configuration
export const contactConfig = {
  location: {
    title: 'Lokalizacja Biura',
    address: {
      city: 'Warszawa',
      country: 'Polska',
      street: 'ul. Przykładowa 123',
      state: 'Mazowieckie',
      postcode: '00-001'
    }
  },
  phone: '+48 123 456 789',
  email: 'kontakt@gamebuzz360.pl',
  workingHours: {
    days: 'Poniedziałek - Piątek',
    hours: '9:00 - 17:00 CET'
  },
  weekend: {
    days: 'Sobota - Niedziela',
    status: 'Zamknięte'
  }
}

// Testimonial configuration
export const testimonialConfig = {
  testimonial2Link: 'https://example.com/testimonial2'
}

export const humanVerificationEnabled = false
export const socilaNetworkEnabled = false
export const newsletterConfig = {
  enabled: false
}
export const cookieConsentConfig = true

// Benefits icons configuration
export const benefitsIcons: Record<string, string> = {
  'Business-Focused Design': 'i-mdi-briefcase',
  'Australian Market Expertise': 'i-mdi-map-marker',
  'Innovative Solutions': 'i-mdi-lightbulb'
}

// Services icons configuration
export const servicesIcons: Record<string, string> = {
  'Web Design': 'i-mdi-web',
  'Brand Identity': 'i-mdi-palette',
  'UI/UX Design': 'i-mdi-layers',
  'Print Design': 'i-mdi-printer',
  'Motion Design': 'i-mdi-movie'
} 