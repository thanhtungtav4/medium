import React, { Component } from "react";
import LazyLoad from 'react-lazyload';
export default class Content extends Component {  
  render() {
    var PostData = this.props.data;
    console.log(PostData);
  return (
       <div className="entry-main-content dropcap"
       dangerouslySetInnerHTML={{
         __html: PostData?.content?.rendered
       }}>
      </div>
    );
  }
}