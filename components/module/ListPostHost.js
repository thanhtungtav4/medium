import React, { Component } from "react";
import ItemPost02 from "../base/ItemPost02";
import LazyLoad from 'react-lazyload';
import PlaceholderItem from "../../components/placeholder/ItemPost01";
import API from "../../lib/api";
export default class ListPostHost extends Component {  
  constructor(props){
    super(props);
    this.state = {
      Posthost: [],
      loading: true,
    }
  }
  componentDidMount() {
    API.get('/posts?per_page=6')
    .then(res => {
      this.setState({
        Posthost: res.data,
        loading: false
      })
    })
    .catch(err =>console.log(err));
  }
  render() {
    var PostHostData = this.state.Posthost;
  return (
    <>
    <LazyLoad className="col-md-10">
      <div className="row justify-content-between">
      {this.state.loading ? (
        <>
        <article className="col-md-6">
          <PlaceholderItem />
        </article>
        <article className="col-md-6">
          <PlaceholderItem />
        </article>
        <article className="col-md-6">
          <PlaceholderItem />
        </article>
        <article className="col-md-6">
          <PlaceholderItem />
        </article>
        <article className="col-md-6">
          <PlaceholderItem />
        </article>
        <article className="col-md-6">
          <PlaceholderItem />
        </article>
        <article className="col-md-6">
          <PlaceholderItem />
        </article>
        <article className="col-md-6">
          <PlaceholderItem />
        </article>
        </>
        ) : (
        <>
        {PostHostData.map((item, index) => (
                <ItemPost02 key={index} data={item} />
                ))}
      </>
        )}
      </div>
    </LazyLoad>
    </>
    );
  }
}