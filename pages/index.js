import React, { Component } from "react";
import Head from "next/head";
import Layout from "../components/layout/layout";
import Trending from "../components/module/Trending";
import Featured from "../components/module/Featured";
import HostPost from "../components/module/HostPost";
import ListPostHost from "../components/module/ListPostHost";
import SidebarAds from "../components/module/SidebarAds";
import Popular from "../components/module/Popular";
import MostRecent from "../components/module/MostRecent";

export default class Homepage extends Component {  
  render() {
  return (
    <>
    <Head>
       <meta charSet="utf-8" />
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <title>Home</title>
         <meta name="description" content='{meta.description}'/>
         <meta name="msapplication-TileColor" content="#ffffff" />
         <meta name="msapplication-TileImage" content='{meta.image}' />
         <meta name="keywords" content='{meta.keywords}'></meta>
         <link href="https://fonts.googleapis.com/css?family=Cabin:400,700&display=swap" rel="stylesheet" /> 
         <link href="https://fonts.googleapis.com/css?family=B612+Mono&display=swap" rel="stylesheet" /> 
         <link href="https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i&display=swap" rel="stylesheet" />
   </Head>
   <Layout>
   <div className="section-featured featured-style-1">
     <div className="container">
       <div className="row">
         <Featured/>
         <Trending/>
       </div>
       <div className="divider" />           
     </div> 
   </div>
   <HostPost/>
   <div className="content-widget">
     <div className="container">
       <div className="row">
         <ListPostHost/>
         <SidebarAds/>
       </div>
       <div className="divider-2" />
     </div>
   </div> 
   <div className="content-widget">
     <div className="container">
       <div className="row">
         <MostRecent/>
         <Popular/>
       </div>
     </div>
   </div>
   </Layout>
  
 </>
    );
  }
}