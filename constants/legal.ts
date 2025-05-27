export const LEGAL = {
  TERMS: 'terms',
  PRIVACY: 'privacy',
  DISCLAIMER: 'disclaimer',
  COOKIES: 'cookies'
} as const

export const LEGAL_ROUTES = {
  [LEGAL.TERMS]: '/legal/terms',
  [LEGAL.PRIVACY]: '/legal/privacy',
  [LEGAL.DISCLAIMER]: '/legal/disclaimer',
  [LEGAL.COOKIES]: '/legal/cookies'
} as const

export type LegalKey = keyof typeof LEGAL
export type LegalRouteKey = keyof typeof LEGAL_ROUTES 