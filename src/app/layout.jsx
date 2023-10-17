import 'bootstrap/dist/css/bootstrap.min.css';
import '@/app/assets/styles/globals.scss';
import Navbarmain from '@/components/NavbarMain/NavbarMain';
import Footer from '@/components/Footer/Footer';
import { headers } from 'next/headers';
import Analytics from '@/components/GtmComponent/gtmComponent';
import { Suspense } from 'react'



export default function RootLayout({ children }) {

  const headersList = headers();
  const referer = headersList.get('referer');
  let refrerUrl = referer && new URL(referer);
  let sourceData = {
    sourceUrl: refrerUrl?.origin || '',
    sourceHost: refrerUrl?.host || ''
  };
  
  return (
    <html lang="en">
      <body >
        <Suspense>
          <Analytics />
        </Suspense>
        <main>
          <Navbarmain sourceData={sourceData}/>
          {children}
          <Footer sourceData={sourceData} />
        </main>
      </body>
    </html>
  )
}
