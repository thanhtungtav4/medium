import React, { Component } from "react";
import StickyBox from "react-sticky-box";
export default class Share extends Component {  
  render() {
  return (
    <>
      <div className="entry-left-col">
        <div className="social-sticky">
          <StickyBox>
            <a href="#"><i className="icon-facebook" /></a>
            <a href="#"><i className="icon-twitter" /></a>
            <a href="#"><i className="icon-heart" /></a>
            <a href="#"><i className="icon-paper-plane" /></a>
          </StickyBox>
        </div>
      </div>
    </>
    );
  }
}