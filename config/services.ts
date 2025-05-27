import { SERVICES } from '~/constants/services'

export interface ServiceConfig {
  id: string;
  image: string;
  alt: string;
}

export const servicesConfig: Record<string, ServiceConfig> = {
  [SERVICES.WEB_DESIGN]: {
    id: SERVICES.WEB_DESIGN,
    image: '/img/photo_2025-05-23_00-08-44.jpg',
    alt: 'Professional Web Design Services'
  },
  [SERVICES.BRAND_IDENTITY]: {
    id: SERVICES.BRAND_IDENTITY,
    image: '/img/photo_2025-05-23_00-08-50.jpg',
    alt: 'Brand Identity Design'
  },
  [SERVICES.UI_UX_DESIGN]: {
    id: SERVICES.UI_UX_DESIGN,
    image: '/img/photo_2025-05-23_00-08-56.jpg',
    alt: 'UI/UX Design Services'
  },
  [SERVICES.PRINT_DESIGN]: {
    id: SERVICES.PRINT_DESIGN,
    image: '/img/photo_2025-05-23_00-08-40.jpg',
    alt: 'Print Design Services'
  },
  [SERVICES.MOTION_DESIGN]: {
    id: SERVICES.MOTION_DESIGN,
    image: '/img/photo_2025-05-23_00-33-02.jpg',
    alt: 'Motion Design Services'
  }
}