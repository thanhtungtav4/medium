import React, { Component } from "react";
export default class HostPost extends Component {  
  render() {
  return (
    <>
      <div className="content-widget">
    <div className="container">
      <div className="row justify-content-between post-has-bg ml-0 mr-0">
        <div className="col-lg-6 col-md-8">
          <div className="pt-5 pb-5 pl-md-5 pr-5 align-self-center">
            <div className="capsSubtle mb-2">Editors' Pick</div>
            <h2 className="entry-title mb-3"><a href="single.html">What I Wish I'd Known When I Made a Drastic Career Change</a></h2>
            <div className="entry-excerpt">
              <p>
                Eight people who took the plunge share the biggest challenges and surprises of starting over. We spend a considerable portion of our time using a web browser and may sometimes need to get a screenshot of a full page in your browser. 
              </p>
            </div>
            <div className="entry-meta align-items-center">
              <a href="author.html">Steven Job</a> in <a href="archive.html">OneZero</a><br />                                    
              <span>July 15</span>
              <span className="middotDivider" />
              <span className="readingTime" title="3 min read">5 min read</span>
              <span className="svgIcon svgIcon--star">
                <svg className="svgIcon-use" width={15} height={15}>
                  <path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-4 bgcover d-none d-md-block pl-md-0 ml-0" style={{backgroundImage: 'url(static/images/thumb/thumb-800x495.jpg)'}} />
      </div>
      <div className="divider" />
    </div>
  </div> 
    </>
    );
  }
}