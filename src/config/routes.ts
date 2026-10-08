/**
 * Central Routes Configuration
 * Single source of truth for all internal navigation across the site.
 */

export const ROUTES = {
  home: '/',
  about: '/about',
  services: '/services',
  projects: '/projects',
  materials: '/materials',
  maintenancePlans: '/maintenance',
  contact: '/contact',
  privacy: '/privacy',
  cookies: '/cookies',
  terms: '/terms',
  blog: '/blog',

  // Service sub-routes
  servicesList: {
    gardening: '/services/gardening',
    landscaping: '/services/landscaping',
    irrigation: '/services/irrigation',
    maintenance: '/services/maintenance',
    agriculture: '/services/agriculture',
    equipmentMaterials: '/materials', // Maps to the actual Materials & Equipment page
  },

  serviceDetail: (slug: string) => {
    if (slug === 'equipment-materials') return '/materials';
    return `/services/${slug}`;
  },

  blogDetail: (slug: string) => `/blog/${slug}`,
  blogPost: (slug: string) => `/blog/${slug}`,
} as const;

export type AppRoutes = typeof ROUTES;
