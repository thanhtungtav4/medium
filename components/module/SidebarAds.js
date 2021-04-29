import React, { Component } from "react";
export default class SidebarAds extends Component {  
  render() {
  return (
    <>
      <div className="col-md-2">
        <div className="sidebar-widget ads">
          <a href="#"><img src="static/images/ads/ads-1.png" alt={true} /></a>
        </div>
      </div>
    </>
    );
  }
}