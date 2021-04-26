import React from 'react';
import App from 'next/app';
import MainLayout from '../components/layout/main';
import DefaultLayout from '../components/layout/default';
import Header from '../components/layout/header';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const Layout = Component.Layout || DefaultLayout;

    return (
      <Header>

      <MainLayout>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MainLayout>
    );
  }
}

export default MyApp;