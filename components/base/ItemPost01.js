import React, { Component } from "react";
import LazyLoad from 'react-lazyload';
import Image from 'next/image';
export default class ItemPost01 extends Component {  
  render() {
    var item = this.props.data;
    console.log(item);
  return (
    
    <LazyLoad>
      <article>
            <div className="mb-3 d-flex row">
              <figure className="col-4 col-md-4">
                <a href="single.html">
                  <Image src={item.featured_image_url ? item.featured_image_url : 'https://picsum.photos/200/300'} layout="responsive" alt={item.title.rendered} width={700} height={512}/>
                </a>
              </figure>
              <div className="entry-content col-8 col-md-8 pl-md-0">                                                    
                <h5 className="entry-title mb-3"><a href={item.slug}>{item.title.rendered}</a></h5>
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