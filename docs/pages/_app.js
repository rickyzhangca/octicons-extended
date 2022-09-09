import React from 'react';
import Script from 'next/script';
import '../tailwind.css';

import Head from 'next/head';
import Home from './home';

const MyApp = () => {
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
      <Script
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-MW6PXWV2EF'></Script>
      <Script id='ga'>
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MW6PXWV2EF');`}
      </Script>
      <main>
        <Home />
      </main>
    </>
  );
};

// eslint-disable-next-line import/no-unused-modules
export default MyApp;
