import Script from 'next/script'
import { ReactNode } from 'react';
import type { AppProps } from 'next/app'

import '@/styles/global.css'
import Header from '@/components/Header'
import Lets from '@/components/Lets'
import Footer from '@/components/Footer'


type metaProps = {
  meta: ReactNode;
};

function MyApp({ Component, pageProps }: AppProps, props: metaProps) {
  return(
    <>
      <div onContextMenu={(e)=> e.preventDefault()}>
        {props.meta}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-HEE8B4WDJY"></Script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', 'G-HEE8B4WDJY');
            `,
          }}
        />
        <Header/>
        <Component {...pageProps}/>
        <Lets/>
        <Footer/>
      </div>
    </>
  ) 
}

export default MyApp