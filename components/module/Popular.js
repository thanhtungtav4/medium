import React, { Component } from "react";
import StickyBox from "react-sticky-box";
export default class Popular extends Component {  
  render() {
  return (
    <>
    <div className="col-md-4 pl-md-5 sticky-sidebar ">                    
          <StickyBox className="sidebar-widget latest-tpl-4">
              <h4 className="spanborder">
                <span>Popular</span>
              </h4>
              <ol>
              <li className="d-flex">
                <div className="post-count">01</div>
                <div className="post-content">
                  <h5 className="entry-title mb-3"><a href="single.html">President and the emails. Who will guard the guards?</a></h5>
                  <div className="entry-meta align-items-center">
                    <a href="author.html">Alentica</a> in <a href="archive.html">Police</a><br />                                    
                    <span>May 14</span>
                    <span className="middotDivider" />
                    <span className="readingTime" title="3 min read">3 min read</span>
                    <span className="svgIcon svgIcon--star">
                      <svg className="svgIcon-use" width={15} height={15}>
                        <path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </li>
              <li className="d-flex">
                <div className="post-count">02</div>
                <div className="post-content">
                  <h5 className="entry-title mb-3"><a href="single.html">How to Silence the Persistent Ding of Modern Life</a></h5>
                  <div className="entry-meta align-items-center">
                    <a href="author.html">Alentica</a> in <a href="archive.html">Police</a><br />                                    
                    <span>Jun 12</span>
                    <span className="middotDivider" />
                    <span className="readingTime" title="3 min read">4 min read</span>
                    <span className="svgIcon svgIcon--star">
                      <svg className="svgIcon-use" width={15} height={15}>
                        <path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </li>
              <li className="d-flex">
                <div className="post-count">03</div>
                <div className="post-content">
                  <h5 className="entry-title mb-3"><a href="single.html">Why We Love to Watch</a></h5>
                  <div className="entry-meta align-items-center">
                    <a href="author.html">Alentica</a> in <a href="archive.html">Police</a><br />                                    
                    <span>May 15</span>
                    <span className="middotDivider" />
                    <span className="readingTime" title="3 min read">5 min read</span>
                    <span className="svgIcon svgIcon--star">
                      <svg className="svgIcon-use" width={15} height={15}>
                        <path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </li>
              <li className="d-flex">
                <div className="post-count">04</div>
                <div className="post-content">
                  <h5 className="entry-title mb-3"><a href="single.html">How Health Apps Let</a></h5>
                  <div className="entry-meta align-items-center">
                    <a href="author.html">Alentica</a> in <a href="archive.html">Police</a><br />                                    
                    <span>April 27</span>
                    <span className="middotDivider" />
                    <span className="readingTime" title="3 min read">6 min read</span>
                    <span className="svgIcon svgIcon--star">
                      <svg className="svgIcon-use" width={15} height={15}>
                        <path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </li>
            </ol>
          </StickyBox>
        </div> 
    </>
    );
  }
}