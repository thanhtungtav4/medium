import React, { Component } from "react";
import ItemPost02 from "../base/ItemPost02";
import API from "../../lib/api";
export default class ListPostHost extends Component {  
  constructor(props){
    super(props);
    this.state = {
      Posthost: [],
    }
  }
  componentDidMount() {
    API.get('/posts?per_page=8')
    .then(res => {
      this.setState({
        Posthost: res.data
      })
    })
    .catch(err =>console.log(err));
  }
  render() {
    var PostHostData = this.state.Posthost;
  return (
    <>
    <div className="col-md-10">
      <div className="row justify-content-between">
      {PostHostData.map((item, index) => (
        <ItemPost02 key={index} data={item} />
        ))}
      </div>
    </div>
    </>
    );
  }
}