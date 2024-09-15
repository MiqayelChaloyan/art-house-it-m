import { getCourses } from '@/utils/data';

import { MetadataRoute } from 'next';
import { Pages } from '@/constants/pages';

type LocaleKeys = 'am' | 'en' | 'ru';
type LocaleValues = string;

const locales: Record<LocaleKeys, LocaleValues> = {
  am: 'am',
  en: 'en',
  ru: 'ru',
};

function escapeUrl(url: string): string {
  return url.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
};

async function generateSitemapEntries(locale: string): Promise<MetadataRoute.Sitemap> {
  const courses = await getCourses(locale);

  const coursesEntries = courses?.map(({ slug }: { slug: string }) => ({
    url: escapeUrl(`${process.env.NEXT_PUBLIC_DOMAIN}/${locale}${Pages.COURSES}/${slug}`),
    lastModified: new Date().toISOString(),
    priority: 1,
  }));

  return [
    {
      url: escapeUrl(`${process.env.NEXT_PUBLIC_DOMAIN}/${locale}`),
      lastModified: new Date().toISOString(),
      priority: 1,
      changeFrequency: 'weekly',
    },
    {
      url: escapeUrl(`${process.env.NEXT_PUBLIC_DOMAIN}/${locale}${Pages.ABOUT}`),
      lastModified: new Date().toISOString(),
      priority: 0.5,
      changeFrequency: 'weekly',
    },
    {
      url: escapeUrl(`${process.env.NEXT_PUBLIC_DOMAIN}/${locale}${Pages.OUR_TEAM}`),
      lastModified: new Date().toISOString(),
      priority: 1,
      changeFrequency: 'weekly',
    },
    {
      url: escapeUrl(`${process.env.NEXT_PUBLIC_DOMAIN}/${locale}${Pages.PRICE_LIST}`),
      lastModified: new Date().toISOString(),
      priority: 1,
      changeFrequency: 'weekly',
    },
    {
      url: escapeUrl(`${process.env.NEXT_PUBLIC_DOMAIN}/${locale}${Pages.ORDERS}`),
      lastModified: new Date().toISOString(),
      priority: 1,
      changeFrequency: 'weekly',
    },
    {
      url: escapeUrl(`${process.env.NEXT_PUBLIC_DOMAIN}/${locale}${Pages.CONTACT}`),
      lastModified: new Date().toISOString(),
      priority: 1,
      changeFrequency: 'weekly',
    },
    {
      url: escapeUrl(`${process.env.NEXT_PUBLIC_DOMAIN}/${locale}${Pages.COURSES}`),
      lastModified: new Date().toISOString(),
      priority: 1,
      changeFrequency: 'weekly',
    },
    ...coursesEntries,
  ];
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const localeSitemaps = await Promise.all(
    Object.values(locales).map((locale) => generateSitemapEntries(locale))
  );

  return localeSitemaps.flat();
};