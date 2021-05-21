import React, { Component } from "react";
import Head from "next/head";
import LazyLoad from 'react-lazyload';
import Share from "../../module/post/Share";
import Related from "../../base/related";
import Image from "next/image";
import API from "../../../lib/api";
export default class Content extends Component {  
  constructor(props){
    super(props);
    this.state = {
      relatedData: [],
      loadingContent: true,
    }
  }
  async componentDidMount() {
    API.get('/posts/related/' + this.props.dataPost.id)
    .then(res => {
      this.setState({
        relatedData: res.data,
        loadingContent: false
      })
      
    })
    .catch(err =>console.log(err));
  }
  render() {
    var PostData = this.props.dataPost;
    var PostRelated = this.state.relatedData;
  return (
  <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{PostData?.title?.rendered}</title>
      </Head>
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
            </article>
            {/*Begin post related*/}
            <LazyLoad className="related-posts mb-5">
              <h4 className="spanborder text-center">
                <span>Vài viết liên quan</span>
              </h4>
              <div className="row justify-content-between">
                <div className="divider-2" />
                {this.state.loadingContent ? (
                  <h2>Is loading content</h2>
                 ) : (
                  <>
                      {PostRelated.map((items, index) => (
                       <Related key={index} data={items} />
                        // <h1>{items?.post_name}</h1>
                    ))}
                  </>
                 )}
              </div>
            </LazyLoad>
          </div>
  </>  
    );
  }
}