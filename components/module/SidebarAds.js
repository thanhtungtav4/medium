import React, { Component } from "react";
import Image from 'next/image';
import LazyLoad from 'react-lazyload';
export default class SidebarAds extends Component {  
  render() {
  return (
      <LazyLoad className="col-md-2">
        <div className="sidebar-widget ads">
          <a href="#"><Image src="/static/images/ads/ads-1.png" layout="responsive" alt="true" width={160} height={334} /></a>
        </div>
      </LazyLoad>
    );
  }
}