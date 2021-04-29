import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
// import Layout from "../components/layout/layout";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
          <Main />
          <NextScript />
      </Html>
    );
  }
}

export default MyDocument;