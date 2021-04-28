import React from 'react';
import "../public/static/styles/global-styles.css";


export default function MyApp(
  { 
    Component, 
    pageProps,
  }) 
    
  {
  return <Component {...pageProps} />;
}