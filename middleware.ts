import createMiddleware from 'next-intl/middleware';
import {locales, localePrefix, defaultLocale} from '@/app/config/next-intl/navigation';
import { NextRequest } from 'next/server';
import { updateSession } from './app/config/supabase/middleware';

const handleI18nRouting = createMiddleware({
  locales,
  defaultLocale,
  localePrefix
});
 

export async function middleware(request: NextRequest) {
  const response = handleI18nRouting(request);
  return await updateSession(request,response)
}
export const config = {
  matcher: [
    /* ['/', '/(en|es)/:path*'] */
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
    // However, match all pathnames within `/auth`, optionally with a locale prefix
    '/([\\w-]+)?/auth/(.+)'
  ]
};