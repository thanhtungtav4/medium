import React, { Component } from "react";
import LazyLoad from 'react-lazyload';
import Image from 'next/image';

export default class FeaturedPost extends Component {  
  render() {
  return (
    <>
      <article className="first mb-3">
          <figure><a href="single.html">
            <Image src="/static/images/thumb/thumb-1400x992.jpg" alt="post-title" layout="responsive" width={730} height={517} />
            </a></figure>
          <h1 className="entry-title mb-3"><a href="single.html">Home Internet Is Becoming a Luxury for the Wealthy</a></h1>
          <div className="entry-excerpt">
            <p>
              And black on meretriciously regardless well fearless irksomely as about hideous wistful bat less oh much and occasional useful rat darn jeepers far. 
            </p>
          </div>
          <div className="entry-meta align-items-center">
            <a className="author-avatar" href="#">
              <Image src="/static/images/author-avata-1.jpg" alt="post-title" width={40} height={40} /></a>
            <a href="author.html">Dave Gershgorn</a> in <a href="archive.html">OneZero</a><br />                                  
            <span>Jun 14</span>
            <span className="middotDivider" />
            <span className="readingTime" title="3 min read">3 min read</span>
            <span className="svgIcon svgIcon--star">
              <svg className="svgIcon-use" width={15} height={15}>
                <path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z" />
              </svg>
            </span>
          </div>
        </article> 
        <div className="divider" />   
    </>
    );
  }
}