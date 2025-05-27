export const SERVICES = {
  WEB_DESIGN: 'web-design',
  BRAND_IDENTITY: 'brand-identity',
  UI_UX_DESIGN: 'ui-ux-design',
  PRINT_DESIGN: 'print-design',
  MOTION_DESIGN: 'motion-design'
} as const

export type ServiceKey = typeof SERVICES[keyof typeof SERVICES]

export const SERVICE_ROUTES = {
  [SERVICES.WEB_DESIGN]: '/services/web-design',
  [SERVICES.BRAND_IDENTITY]: '/services/brand-identity',
  [SERVICES.UI_UX_DESIGN]: '/services/ui-ux-design',
  [SERVICES.PRINT_DESIGN]: '/services/print-design',
  [SERVICES.MOTION_DESIGN]: '/services/motion-design'
} as const 