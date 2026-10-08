import { MetadataRoute } from 'next';
import { ROUTES } from '@/config/routes';
import { servicesData } from '@/data/services';
import { blogPostsData } from '@/data/blogPosts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jangada-maiuscula.com';

  const staticRoutePaths = [
    ROUTES.home,
    ROUTES.about,
    ROUTES.services,
    ROUTES.maintenancePlans,
    ROUTES.projects,
    ROUTES.materials,
    ROUTES.blog,
    ROUTES.contact,
    ROUTES.privacy,
    ROUTES.cookies,
    ROUTES.terms,
  ];

  const staticRoutes = staticRoutePaths.map((route) => ({
    url: `${baseUrl}${route === '/' ? '' : route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '/' ? 1.0 : 0.8,
  }));

  const serviceRoutes = servicesData.map((s) => ({
    url: `${baseUrl}${ROUTES.serviceDetail(s.slug)}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const blogRoutes = blogPostsData.map((b) => ({
    url: `${baseUrl}${ROUTES.blogPost(b.slug)}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
