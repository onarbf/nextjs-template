import createMiddleware from 'next-intl/middleware';
import {locales, localePrefix, defaultLocale} from '@/app/config/navigation';
export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix
});
 
export const config = {
  matcher: ['/', '/(en|es)/:path*']
};