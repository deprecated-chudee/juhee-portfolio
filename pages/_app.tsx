import React from 'react'
import App from 'next/app';
import Head from 'next/head';
import '../styles/styles.scss';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport"
                content="width=device-width,user-scalable=no,initial-scale=1,minimum-scale=1,maximum-scale=1,shrink-to-fit=no" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>김주희산돌 포트폴리오</title>
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp
