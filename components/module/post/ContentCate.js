import React, { Component } from "react";
import LazyLoad from 'react-lazyload';
import Image from "next/image";
import Popular from "../../module/Popular";
import FeaturedPost from "../categories/FeaturedPost";
import ItemPost03 from "../../base/ItemPost03";
import ItemPost from "../categories/ItemPost";
export default class ContentCate extends Component {  
  render() {
  return (
      <>
      <div className="content-widget">
        <div className="container">
      <div className="row">
        <div className="col-md-8">
          <h4 className="spanborder">
            <span>Culture</span>
          </h4>
          <FeaturedPost/>
          <ItemPost03/>
          <ItemPost03/>
          <ItemPost03/>
          <div className="row justify-content-between">
            <div className="divider-2" />
              <ItemPost/>
              <ItemPost/>
              <ItemPost/>
              <ItemPost/>
          </div>
          <ItemPost03/>
          <ItemPost03/>
          <ItemPost03/>
        <ul className="page-numbers heading">
            <li><span aria-current="page" className="page-numbers current">1</span></li>
            <li><a className="page-numbers" href="#">2</a></li>
            <li><a className="page-numbers" href="#">3</a></li>
            <li><a className="page-numbers" href="#">4</a></li>
            <li><a className="page-numbers" href="#">5</a></li>
            <li><a className="page-numbers" href="#">...</a></li>
            <li><a className="page-numbers" href="#">98</a></li>
            <li><a className="next page-numbers" href="#"><i className="icon-right-open-big" /></a></li>
          </ul>
        </div> {/*col-md-8*/}
        <Popular/>
      </div>
    </div>
      </div>
      </>
    );
  }
}