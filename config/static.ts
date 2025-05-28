// Configuration for static generation
export const staticConfig = {
  // Pages that should be excluded from static generation
  excludePages: [
    '/admin/**', // Admin pages
    '/dashboard/**', // Dashboard pages
    '/api/**', // API routes
    '/dynamic/**', // Dynamic pages
    '/legal/[slug]', // Dynamic legal pages
    '/contact',
    '/services',
    '/about',
  ],

  // Pages that should be generated statically
  includePages: [
    '/',
    '/thank-you',
    '/legal/privacy',
  ],

  // Routes that should be generated with dynamic parameters
  dynamicRoutes: {
    '/legal/[slug]': ['privacy']
  }
} 