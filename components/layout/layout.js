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
        {this.props.children}
        <Footer></Footer>
      </>
    );
  }
}
export default Layout;