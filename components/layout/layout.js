import React from "react";
import LazyLoad from 'react-lazyload';
import NavMobile from "../base/navmobile";
import Header from "./header";
import Footer from "./footer";
import ScrollToTop from "../base/ScrollToTop";
import ScrollBar from "../base/Topscrollbar";
class Layout extends React.Component {
  render() {
    return (
      <>
        <ScrollBar/>
        <NavMobile/>
        <Header/>
        <LazyLoad>
          <main id="content">
            {this.props.children}
          </main>
        </LazyLoad>
        <Footer/>
        <ScrollToTop/>
      </>
    );
  }
}

export default Layout;