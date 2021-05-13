import React, { Component } from "react";
import Image from 'next/image';
import ItemPost01 from "../base/ItemPost01";
import LazyLoad from 'react-lazyload';
import API from "../../lib/api";
export default class Featured extends Component { 
  constructor(props){
    super(props);
    this.state = {
      Categories2: [],
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    API.get('/posts?per_page=4')
    .then(res => {
      this.setState({
        Categories2: res.data
      })
    })
    .catch(err =>console.log(err));
  }
  render() {
    var CategoriesData = this.state.Categories2;
  return (
    <>
        <div className="col-sm-12 col-md-9 col-xl-9">
          <h2 className="spanborder h4">
            <span>Editor's Picks</span>
          </h2>
          <div className="row">
            <LazyLoad className="col-sm-12 col-md-6">
              <article className="first mb-3">
                <figure><a href="single.html">
                  <Image src="/static/images/thumb/thumb-1240x700.jpg" layout="responsive"  alt="true" width={405} height={277}/>
                  </a></figure>
                <h3 className="entry-title mb-3"><a href="single.html">Home Internet Is Becoming a Luxury for the Wealthy</a></h3>
                <div className="entry-excerpt">
                  <p>
                    And black on meretriciously regardless well fearless irksomely as about hideous wistful bat less oh much and occasional useful rat darn jeepers far. 
                  </p>
                </div>
                <div className="entry-meta align-items-center">
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
              <a className="btn btn-green d-inline-block mb-4 mb-md-0" href="archive.html">All Featured</a>
            </LazyLoad>
            <LazyLoad className="col-sm-12 col-md-6">
                {CategoriesData.map((item, index) => (
                     <ItemPost01 key={index} data={item} />
                ))}
            </LazyLoad>
          </div>                
        </div>             
    </>
  );
}
}