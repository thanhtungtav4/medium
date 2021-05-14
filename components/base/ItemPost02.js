import React, { Component } from "react";
import LazyLoad from 'react-lazyload';
import Image from 'next/image';
export default class ItemPost02 extends Component {  
  render() {
    var item = this.props.data;
  return (
            <article className="col-md-6">
              <LazyLoad className="mb-3 d-flex row">
                <figure className="col-md-5">
                <a href={item?.slug}>
                  <Image src={item?.featured_image_url ? item?.featured_image_url : 'https://picsum.photos/200/300'} layout="responsive" alt={item?.title?.rendered} width={700} height={512}/>
                </a>
                  </figure>
                <div className="entry-content col-md-7 pl-md-0">                                    
                  <h5 className="entry-title mb-3"><a href={item?.slug}>{item?.title?.rendered}</a></h5>
                  <div className="entry-excerpt">
                  <div
                      dangerouslySetInnerHTML={{
                        __html: item?.excerpt?.rendered
                      }}></div>
                  </div>
                  <div className="entry-meta align-items-center">
                    <a href="author.html">Anna Goldfarb</a> in <a href="archive.html">Fashion</a><br />                                    
                    <span>March 12</span>
                    <span className="middotDivider" />
                    <span className="readingTime" title="3 min read">4 min read</span>
                  </div>
                </div>
              </LazyLoad>
            </article>
    );
  }
}