import React, { Component } from "react";
import Image from 'next/image';
export default class Related extends Component {  
  render() {
    var item = this.props.data;
  return (
    <>
     <article className="col-md-4">
        <div className="mb-3 d-flex row">
          <figure className="col-md-5"><a href={item?.post_name}>
            <Image src={item?.featured_image_url ? item?.featured_image_url : 'https://picsum.photos/200/300'} layout="responsive" alt={item?.title?.rendered} width={512} height={512}/>
            </a></figure>
          <div className="entry-content col-md-7 pl-md-0">                                    
            <h5 className="entry-title mb-3"><a href={item?.post_name}>{item?.post_title}</a></h5>
            <div className="entry-meta align-items-center">                             
              <span>{item?.post_modified}</span>
              <span className="middotDivider" />
            </div>
          </div>
        </div>
    </article>
    </>
    );
  }
}