import React from "react";
import Head from "next/head";
import HeadMeta from "./head";
import NavMobile from "./navmobile";
import Header from "./header";
import Footer from "./footer";
import ScrollToTop from "../base/ScrollToTop";

class Layout extends React.Component {
  render() {
    return (
      <>
      <div id="wrapper">
        <HeadMeta></HeadMeta>
        <NavMobile></NavMobile>
        <Header></Header>
        <main id="content">
          {this.props.children}
        </main>
        <Footer></Footer>
        </div>
        {/*#wrapper*/}
        <ScrollToTop></ScrollToTop>
        {/* <a href="#" className="back-to-top heading"><i className="icon-left-open-big" /><span className="d-lg-inline d-md-none">Top</span></a> */}
        {/* <script type="text/javascript" src="static/js/jquery.min.js"></script>
        <script type="text/javascript" src="static/js/bootstrap.js"></script>
        <script type="text/javascript" src="static/js/jquery-scrolltofixed-min.js"></script>
        <script type="text/javascript" src="static/js/theia-sticky-sidebar.js"></script>
        <script type="text/javascript" src="static/js/owl.carousel.min.js"></script>
        <script type="text/javascript" src="static/js/jquery.lazy.min.js"></script> */}
        {/* <script type="text/javascript" src="static/js/scripts.js"></script> */}
      </>
    );
  }
}
export default Layout;