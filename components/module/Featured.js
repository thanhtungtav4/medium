import React, { Component } from "react";
import ItemPost01 from "../base/ItemPost01";
import PlaceholderItem from "../../components/placeholder/ItemPost01";
import PlaceholderMain from "../../components/placeholder/mainpost";
import MainPost from "../base/mainPost";
import API from "../../lib/api";


export default class Featured extends Component { 
  constructor(props){
    super(props);
    this.state = {
      Categories2: [],
      loading: true,
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    API.get('/posts?per_page=4')
    .then(res => {
      this.setState({
        Categories2: res.data,
        loading: false
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
          <div className="col-sm-12 col-md-6">
          {this.state.loading ? (
                <PlaceholderMain />
                ) : (
                 <MainPost/>
                )}
          </div>
            <div className="col-sm-12 col-md-6">
            {this.state.loading ? (
                  <>
                    <PlaceholderItem />
                    <PlaceholderItem />
                    <PlaceholderItem />
                    <PlaceholderItem />
                  </>
                ) : (
                  <>
                  {CategoriesData.map((item, index) => (
                      <ItemPost01 key={index} data={item} />
                  ))}
                </>
                )}
            </div>
          </div>                
        </div>             
    </>
  );
}
}