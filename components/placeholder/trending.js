import React, { Component } from "react";
import ContentLoader from "react-content-loader";

export default class Placeholder extends Component {
  render() {
    return (
      <ContentLoader 
      speed={2}
      width={306}
      height={73}
      viewBox="0 0 306 73"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="53" y="3" rx="3" ry="3" width="410" height="6" /> 
      <rect x="53" y="19" rx="3" ry="3" width="380" height="6" /> 
      <rect x="53" y="35" rx="3" ry="3" width="178" height="6" /> 
      <circle cx="20" cy="20" r="20" />
    </ContentLoader>
    );
  }
}