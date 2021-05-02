import React, { Component } from "react";
import LazyLoad from 'react-lazyload';
import Image from 'next/image';
export default class ItemPost01 extends Component {  
  render() {
  return (
    <LazyLoad>
      <article>
            <div className="mb-3 d-flex row">
              <figure className="col-4 col-md-4">
                <a href="single.html">
                  <Image src="/static/images/thumb/thumb-700x512.jpg" layout="responsive" alt="true" width={700} height={512}/>
                </a>
              </figure>
              <div className="entry-content col-8 col-md-8 pl-md-0">                                                    
                <h5 className="entry-title mb-3"><a href="single.html">The Night My Doorbell Camera Captured a Shooting</a></h5>
                <div className="entry-meta align-items-center">
                  <a href="author.html">Alentica</a> in <a href="archive.html">Police</a><br />
                  <span>Jun 16</span>
                  <span className="middotDivider" />
                  <span className="readingTime" title="3 min read">7 min read</span>
                </div>
              </div>
            </div>
      </article>
    </LazyLoad>
    );
  }
}