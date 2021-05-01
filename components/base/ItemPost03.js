import React, { Component } from "react";
export default class ItemPost03 extends Component {  
  render() {
  return (
    <>
          <article className="row justify-content-between mb-5 mr-0">
            <div className="col-md-9 ">
              <div className="align-self-center">
                <div className="capsSubtle mb-2">Editors' Pick</div>
                <h3 className="entry-title mb-3"><a href="single.html">Home Internet Is Becoming a Luxury for the Wealthy</a></h3>
                <div className="entry-excerpt">
                  <p>
                    And black on meretriciously regardless well fearless irksomely as about hideous wistful bat less oh much and occasional useful rat darn jeepers far. 
                  </p>
                </div>
                <div className="entry-meta align-items-center">
                  <a href="author.html">Dave Gershgorn</a> in <a href="archive.html">OneZero</a><br />                                    
                  <span>May 21</span>
                  <span className="middotDivider" />
                  <span className="readingTime" title="3 min read">5 min read</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 bgcover" style={{backgroundImage: 'url(static/images/thumb/thumb-800x495.jpg)'}} />
          </article>
        
    </>
    );
  }
}