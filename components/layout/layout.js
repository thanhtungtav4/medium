import React from "react";
import Head from "next/head";
import HeadMeta from "./head";
import NavMobile from "../base/navmobile";
import Header from "./header";
import Footer from "./footer";
import ScrollToTop from "../base/ScrollToTop";
import ScrollBar from "../base/Topscrollbar";

class Layout extends React.Component {
  render() {
    return (
      <>
      <div id="wrapper">
        <HeadMeta></HeadMeta>
        <ScrollBar></ScrollBar>
        <NavMobile></NavMobile>
        <Header></Header>
        <main id="content">
          {this.props.children}
        </main>
        <Footer></Footer>
        </div>
        <ScrollToTop></ScrollToTop>

        
      </>
    );
  }
}

export default Layout;