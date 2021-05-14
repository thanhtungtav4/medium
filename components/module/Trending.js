import React, { Component } from "react";
import dynamic from "next/dynamic";
import FadeIn from "react-fade-in";
import Placeholder from "../../components/placeholder/trending";
import API from "../../lib/api";

const ItemPopular = dynamic(() => import("../base/ItemPopular"));

export default class Trending extends Component { 
  constructor(props){
    super(props);
    this.state = {
      PostTrending: [],
      Postcount: [],
      loading: true,
    }
  } 
  componentDidMount() {
    API.get('/posts?per_page=5')
    .then(res => {
      this.setState({
        PostTrending: res.data,
        loading: false
      })
    })
    .catch(err =>console.log(err));
  }
  render() {
    var DataTrending = this.state.PostTrending;
  return (
      <div className="col-sm-12 col-md-3 col-xl-3">
        <FadeIn className="sidebar-widget latest-tpl-4">
          <h4 className="spanborder">
            <span>Trending</span>
          </h4>
          <ol>
          {this.state.loading ? (
                  <>
                    <Placeholder />
                    <Placeholder />
                    <Placeholder />
                    <Placeholder />
                    <Placeholder />
                    <Placeholder />

                  </>
                ) : (
                  <>
                    {DataTrending.map((PostTrending, index) => (
                      <ItemPopular key={index} data={PostTrending} Postcount={index} />
                    ))}
                  </>
                )}
          </ol>
        </FadeIn>
        <a className="link-green" href="archive.html">See all trending<svg className="svgIcon-use" width={19} height={19}><path d="M7.6 5.138L12.03 9.5 7.6 13.862l-.554-.554L10.854 9.5 7.046 5.692" fillRule="evenodd" /></svg></a>
      </div>
  );
}
}