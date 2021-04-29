import React, { Component } from "react";
import StickyBox from "react-sticky-box";
import ItemPopular from "../base/ItemPopular";
export default class Popular extends Component {  
  render() {
  return (
    <>
    <div className="col-md-4 pl-md-5 sticky-sidebar ">                    
          <StickyBox className="sidebar-widget latest-tpl-4">
              <h4 className="spanborder">
                <span>Popular</span>
              </h4>
              <ol>
                <ItemPopular/>
             </ol>
          </StickyBox>
        </div> 
    </>
    );
  }
}