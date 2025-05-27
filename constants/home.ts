export const BENEFIT_IMAGES = {
  BUSINESS_FOCUS: 'Business Focus',
  EXPERT_SOLUTIONS: 'Expert Solutions',
  INNOVATIVE_APPROACH: 'Innovative Approach'
} as const

export const SERVICE_IMAGES = {
  WEB_DESIGN: 'Web Design',
  BRAND_IDENTITY: 'Brand Identity',
  UI_UX_DESIGN: 'UI/UX Design',
  PRINT_DESIGN: 'Print Design',
  MOTION_DESIGN: 'Motion Design'
} as const

export type BenefitImageKey = keyof typeof BENEFIT_IMAGES
export type ServiceImageKey = keyof typeof SERVICE_IMAGES 