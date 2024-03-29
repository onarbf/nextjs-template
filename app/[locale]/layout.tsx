import '@/app/styles/globals.css'
import Footer from '../components/Footer';

export default function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  return (
    
    <html lang={locale}>
      <body>
        {children}
        <Footer/>
      </body>
      
    </html>
  );
}