import React, { Component } from "react";
import ContentLoader from "react-content-loader";

export default class Placeholder extends Component {
  render() {
    return (
      <ContentLoader 
      speed={2}
      width={471}
      height={119}
      viewBox="0 0 471 119"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="172" y="7" rx="5" ry="5" width="187" height="21" /> 
      <rect x="173" y="40" rx="5" ry="5" width="99" height="12" /> 
      <rect x="172" y="67" rx="5" ry="5" width="161" height="11" /> 
      <rect x="7" y="5" rx="0" ry="0" width="141" height="103" /> 
      <rect x="55" y="69" rx="0" ry="0" width="20" height="13" />
    </ContentLoader>
    );
  }
}