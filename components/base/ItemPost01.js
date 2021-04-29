import React, { Component } from "react";
export default class ItemPost01 extends Component {  
  render() {
  return (
    <>
    <article>
      <div className="mb-3 d-flex row">
        <figure className="col-4 col-md-4"><a href="single.html"><img src="static/images/thumb/thumb-700x512.jpg" alt={true} /></a></figure>
        <div className="entry-content col-8 col-md-8 pl-md-0">                                                    
          <h5 className="entry-title mb-3"><a href="single.html">The Night My Doorbell Camera Captured a Shooting</a></h5>
          <div className="entry-meta align-items-center">
            <a href="author.html">Alentica</a> in <a href="archive.html">Police</a><br />
            <span>Jun 16</span>
            <span className="middotDivider" />
            <span className="readingTime" title="3 min read">7 min read</span>
            <span className="svgIcon svgIcon--star">
              <svg className="svgIcon-use" width={15} height={15}>
                <path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </article>
    </>
    );
  }
}