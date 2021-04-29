import React, { Component } from "react";
import ItemPost03 from "../base/ItemPost03";
import ItemPost02 from "../base/ItemPost02";
export default class MostRecent extends Component {  
  render() {
  return (
    <>
    
    <div className="col-md-8">
          <h2 className="spanborder h4">
            <span>Most Recent</span>
          </h2>                  
          <ItemPost03/>
         <div className="row justify-content-between">
            <div className="divider-2" />
            <ItemPost02/>
          </div>
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
        
    </>
    );
  }
}