import React, { Component } from "react";
import Head from "next/head";
import axios from 'axios';
import API from "../lib/api";
import Layout from "../components/layout/layout";
import Content from "../components/module/post/Content";
import ContentCate from "../components/module/post/ContentCate";

export default class PostDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      PostDetail: [],
      CategoriesDetail: [],
      PagesDetail: [],
      Type: [],
      ApiString: '/posts/?slug=',
      Slug: window.location.pathname.slice(1),
      loading: true,
      
    }
  }
  getPostData = () => API.get('/posts/?slug=' + this.state.Slug).catch(err => null);
  getCategoriesData = () => API.get('/categories/?slug=' + this.state.Slug).catch(err => null);
  getPagesData = () => API.get('/pages/?slug=' + this.state.Slug).catch(err => null);

  async componentDidMount() {
    try {
      const [PostData, CategoriesData, PagesData ] = await axios.all([ this.getPostData(), this.getCategoriesData(), this.getPagesData() ]);
      this.setState(
        {
          PostDetail: PostData && PostData.data,
          CategoriesDetail : CategoriesData && CategoriesData.data,
          PagesDetail: PagesData && PagesData.data,
          loading: false,
        }
      );
    }
    catch (err) {
        console.log(err.message);
    }
  }
  render() {
      var PostData = this.state.PostDetail[0];
      var PageData = this.state.PagesDetail[0];
      var CategoriesData = this.state.CategoriesDetail[0];
    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Detail post</title>
        </Head>
        <Layout>
        {this.state.loading ? (
                <h2>Is loading</h2>
                 ) : (
                  <>
                   {this.state.PostDetail[0] &&
                    <Content  data={PostData} />
                    }
                    {this.state.CategoriesDetail[0] &&
                    <ContentCate  data={CategoriesData} />
                    }
                    {this.state.PagesDetail[0] &&
                    <Content  data={PageData} />
                    }
                  </>
        )}
        </Layout>
      </>
    );
  }
}

