import React from "react";
import LazyLoad from 'react-lazyload';
import dynamic from "next/dynamic";
import NavMobile from "../base/navmobile";
import Header from "./header";
import ScrollToTop from "../base/ScrollToTop";
import ScrollBar from "../base/Topscrollbar";
const Footer = dynamic(
  () => import('./footer'),
  {
      loading: () => (
        <p>Loading...</p>
      )
  }
)
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