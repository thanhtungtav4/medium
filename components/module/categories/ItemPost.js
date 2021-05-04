import React, { Component } from "react";
import LazyLoad from 'react-lazyload';
import Image from 'next/image';
export default class ItemPost extends Component {  
  render() {
  return (
      <article className="col-md-6">
        <LazyLoad className="mb-3 d-flex row">
          <figure className="col-md-5">
            <a href="single.html">
            <Image src="/static/images/thumb/thumb-512x512-2.jpg" layout="responsive" alt="true" width={128} height={128} />
            </a>
            </figure>
          <div className="entry-content col-md-7 pl-md-0">                                    
            <h5 className="entry-title mb-3"><a href="single.html">Is 'Interactive Storytelling' the Future of Media?</a></h5>
            <div className="entry-meta align-items-center">
              <a href="author.html">Furukawa</a> in <a href="archive.html">Programing</a><br />                                    
              <span>March 14</span>
              <span className="middotDivider" />
              <span className="readingTime" title="3 min read">6 min read</span>
              <span className="svgIcon svgIcon--star">
              </span>
            </div>
          </div>
        </LazyLoad>
      </article>
    );
  }
}