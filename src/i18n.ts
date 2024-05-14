import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'th'];

export default getRequestConfig(async ({ locale }) => {
  const baseLocale = new Intl.Locale(locale).baseName;

  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./app/messages/${baseLocale}.json`)).default,
  };
});
