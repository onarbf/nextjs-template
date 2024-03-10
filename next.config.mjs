import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin('./app/config/next-intl/i18n.ts');
 
/** @type {import('next').NextConfig} */
const nextConfig = {};
 
export default withNextIntl(nextConfig);