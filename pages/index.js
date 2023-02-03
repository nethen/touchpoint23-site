import React from "react";
import Head from 'next/head';

const IndexPage = () => {
  return (
    <>
    <Head>
        <title>Touchpoint 2023</title>
        <meta property="og:title" content="Touchpoint 2023" key="title" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
    </Head>
    <div className="flex h-screen">
      <div className="m-auto">
        <h1 className="font-murmure text-9xl max-sm:text-6xl leading-none">coming soon.</h1>
        <a className="font-apfelgrotezk text-4xl max-sm:text-lg" href='https://www.instagram.com/touchpointsfu/'>@touchpointsfu</a>

      </div>
    </div>
    </>
  );
}

export default IndexPage;