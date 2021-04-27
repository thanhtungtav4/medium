import React from "react";
import Head from "next/head";
import HeadMeta from "./head";
import Header from "./header";
import Footer from "./footer";

class Layout extends React.Component {
  render() {
    return (
      <>
        <HeadMeta></HeadMeta>
        <Header></Header>
        <main id="content">
          {this.props.children}
        </main>
        <Footer></Footer>
      </>
    );
  }
}
export default Layout;