import React from "react";
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
        <main id="content">
          {this.props.children}
        </main>
        <Footer/>
        <ScrollToTop/>
      </>
    );
  }
}

export default Layout;