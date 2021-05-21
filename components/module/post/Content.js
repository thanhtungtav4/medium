import React, { Component } from "react";
import LazyLoad from 'react-lazyload';
import Share from "../../module/post/Share";
import Image from "next/image";
export default class Content extends Component {  
  render() {
    var PostData = this.props.data;
  return (
      <div className="container">
            <article className="entry-wraper mb-5">
              <Share></Share>
              <div className="mb-5">
                <h1 className="entry-title m_b_2rem">
                  {PostData?.title?.rendered}
                </h1>
                <div className="entry-meta align-items-center">
                  <span>{PostData?.date}</span>
                  <span className="middotDivider" />
                </div>
              </div>
              <figure className="image zoom mb-5">
                <Image src={PostData?.featured_image_url ? PostData?.featured_image_url : 'https://picsum.photos/200/300'} layout="responsive" alt={PostData?.title?.rendered} width={1111} height={626}/>
            </figure>
              <div className="entry-main-content dropcap"
              dangerouslySetInnerHTML={{
                __html: PostData?.content?.rendered
              }}>
              </div>
              <div className="entry-bottom">
                <div className="tags-wrap heading">
                  <span className="tags">
                    <a href="#" rel="tag">
                      fashion
                    </a>
                    <a href="#" rel="tag">
                      lifestyle
                    </a>
                    <a href="#" rel="tag">
                      news
                    </a>
                    <a href="#" rel="tag">
                      style
                    </a>
                  </span>
                </div>
              </div>
              <div className="box box-author m_b_2rem">
                <div className="post-author row-flex">
                  <div className="author-img">
                    <img
                      alt="true"
                      src="/static/images/author-avata-1.jpg"
                      className="avatar"
                    />
                  </div>
                  <div className="author-content">
                    <div className="top-author">
                      <h5 className="heading-font">
                        <a href="author.html" title="Ryan" rel="author">
                          Ryan Mark
                        </a>
                      </h5>
                    </div>
                    <p className="d-none d-md-block">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse laoreet ut ligula et semper. Aenean
                      consectetur, est id gravida venenatis.
                    </p>
                    <div className="content-social-author">
                      <a target="_blank" className="author-social" href="#">
                        Facebook{" "}
                      </a>
                      <a target="_blank" className="author-social" href="#">
                        Twitter{" "}
                      </a>
                      <a target="_blank" className="author-social" href="#">
                        {" "}
                        Google +{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            {/*Begin post related*/}
            <div className="related-posts mb-5">
              <h4 className="spanborder text-center">
                <span>Related Posts</span>
              </h4>
              <div className="row justify-content-between">
                <div className="divider-2" />
                <article className="col-md-4">
                  <div className="mb-3 d-flex row">
                    <figure className="col-md-5">
                      <a href="single.html">
                        <img
                          src="/static/images/thumb/thumb-512x512-2.jpg"
                          alt="true"
                        />
                      </a>
                    </figure>
                    <div className="entry-content col-md-7 pl-md-0">
                      <h5 className="entry-title mb-3">
                        <a href="single.html">
                          Is ‘Interactive Storytelling’ the Future of Media?
                        </a>
                      </h5>
                      <div className="entry-meta align-items-center">
                        <a href="author.html">Furukawa</a> in{" "}
                        <a href="archive.html">Programing</a>
                        <br />
                        <span>March 14</span>
                        <span className="middotDivider" />
                        <span className="readingTime" title="3 min read">
                          6 min read
                        </span>
                        <span className="svgIcon svgIcon--star">
                          <svg className="svgIcon-use" width={15} height={15}>
                            <path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="col-md-4">
                  <div className="mb-3 d-flex row">
                    <figure className="col-md-5">
                      <a href="single.html">
                        <img
                          src="/static/images/thumb/thumb-512x512-3.jpg"
                          alt="true"
                        />
                      </a>
                    </figure>
                    <div className="entry-content col-md-7 pl-md-0">
                      <h5 className="entry-title mb-3">
                        <a href="single.html">
                          How NOT to get a $30k bill from Firebase
                        </a>
                      </h5>
                      <div className="entry-meta align-items-center">
                        <a href="author.html">Glorida</a> in{" "}
                        <a href="archive.html">Living</a>
                        <br />
                        <span>April 14</span>
                        <span className="middotDivider" />
                        <span className="readingTime" title="3 min read">
                          7 min read
                        </span>
                        <span className="svgIcon svgIcon--star">
                          <svg className="svgIcon-use" width={15} height={15}>
                            <path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="col-md-4">
                  <div className="mb-3 d-flex row">
                    <figure className="col-md-5">
                      <a href="single.html">
                        <img
                          src="/static/images/thumb/thumb-512x512-4.jpg"
                          alt="true"
                        />
                      </a>
                    </figure>
                    <div className="entry-content col-md-7 pl-md-0">
                      <h5 className="entry-title mb-3">
                        <a href="single.html">
                          Google Can’t Figure Out What YouTube Is
                        </a>
                      </h5>
                      <div className="entry-meta align-items-center">
                        <a href="author.html">Rayan Mark</a> in{" "}
                        <a href="archive.html">GEN</a>
                        <br />
                        <span>Jun 14</span>
                        <span className="middotDivider" />
                        <span className="readingTime" title="3 min read">
                          8 min read
                        </span>
                        <span className="svgIcon svgIcon--star">
                          <svg className="svgIcon-use" width={15} height={15}>
                            <path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
    );
  }
}