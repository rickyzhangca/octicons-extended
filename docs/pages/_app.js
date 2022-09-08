import React from 'react';
import '../tailwind.css';

import Head from 'next/head';
import Home from './home';

function MyApp() {
  return (
    <>
      <Head>
        <title>Octicons Extended</title>
        <meta name='language' content='English'></meta>
        <meta name='title' content='Octicons Extended' />
        <meta
          name='description'
          content='A handcrafted extension to GitHub’s beautiful Octicons'
        />
        <meta
          name='keywords'
          content='octicons, extended, github, icons, react, javascript, iconset, icon, primer'
        />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='author' content='Ricky Zhang' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#0969da' />
        <meta name='apple-mobile-web-app-title' content='Octicons Extended' />
        <meta name='application-name' content='Octicons Extended' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <main className='container mx-auto max-w-screen-xl pt-8 px-4'>
        <Home />
      </main>
    </>
  );
}

// Wrap the MyApp root component with translation context
// so we can use the useTranslation hook in all components of the Application
export default MyApp;
