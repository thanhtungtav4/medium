import React, { Component } from "react";
import ContentLoader from "react-content-loader";

export default class Placeholder extends Component {
  render() {
    return (
    <ContentLoader 
        speed={2}
        width={100}
        height={19}
        viewBox="0 0 100 19"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="2" rx="0" ry="0" width="47" height="6" /> 
        <rect x="-6" y="11" rx="0" ry="0" width="106" height="5" />
      </ContentLoader>
    );
  }
}