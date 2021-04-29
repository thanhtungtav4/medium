import React, { Component } from "react";
import ItemPopular from "../base/ItemPopular";
export default class Trending extends Component {  
  render() {
  return (
    <>
    <div className="col-sm-12 col-md-3 col-xl-3">
          <div className="sidebar-widget latest-tpl-4">
            <h4 className="spanborder">
              <span>Trending</span>
            </h4>
            <ol>
              <ItemPopular/>
            </ol>
          </div>
          <a className="link-green" href="archive.html">See all trending<svg className="svgIcon-use" width={19} height={19}><path d="M7.6 5.138L12.03 9.5 7.6 13.862l-.554-.554L10.854 9.5 7.046 5.692" fillRule="evenodd" /></svg></a>
        </div>
         
    </>
  );
}
}