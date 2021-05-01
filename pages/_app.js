import React from 'react';
import LazyLoad from 'react-lazyload';
import "../public/static/styles/global-styles.css";
import { ThemeProvider } from "next-themes";

const Loading = () =>(
  <div className="loading">
    <h1 className="text-warning">Loading</h1>
  </div>
)
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <LazyLoad placeholder={<Loading/>}>
        <Component {...pageProps} />
      </LazyLoad>
    </ThemeProvider>
  );
}

export default MyApp;