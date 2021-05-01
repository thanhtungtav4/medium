import React, { Component } from "react";
import Image from 'next/image';
export default class ItemPost02 extends Component {  
  render() {
  return (
    <>
            <article className="col-md-6">
              <div className="mb-3 d-flex row">
                <figure className="col-md-5"><a href="single.html">
                  <Image src="/static/images/thumb/thumb-512x512.jpg" layout="responsive"  alt="true" width={700} height={512}/>
                  </a></figure>
                <div className="entry-content col-md-7 pl-md-0">                                    
                  <h5 className="entry-title mb-3"><a href="single.html">I Learned How to Die Before I Knew How to Live</a></h5>
                  <div className="entry-excerpt">
                    <p>
                      Tech companies need more than advisory boards if they want. 
                    </p>
                  </div>
                  <div className="entry-meta align-items-center">
                    <a href="author.html">Anna Goldfarb</a> in <a href="archive.html">Fashion</a><br />                                    
                    <span>March 12</span>
                    <span className="middotDivider" />
                    <span className="readingTime" title="3 min read">4 min read</span>
                  </div>
                </div>
              </div>
            </article>
    </>
    );
  }
}