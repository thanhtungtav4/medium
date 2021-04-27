import React from "react";

class Header extends React.Component {
  render() {
    return(
      <header id="header" className="d-lg-block d-none">
  <div className="container">
    <div className="align-items-center w-100">
      <h1 className="logo float-left navbar-brand"><a href="index.html" className="logo">Merinda</a></h1>
      <div className="header-right float-right w-50">                    
        <div className="d-inline-flex float-right text-right align-items-center">                        
          <ul className="social-network heading navbar-nav d-lg-flex align-items-center">                       
            <li><a href="#"><i className="icon-facebook" /></a></li>
          </ul>
          <ul className="top-menu heading navbar-nav w-100 d-lg-flex align-items-center">
            <li><a href="#" className="btn">Contact</a></li>
          </ul>
          <a className="author-avatar" href="#"><img src="assets/images/author-avata-1.jpg" alt /></a>
        </div>
        <form action="#" method="get" className="search-form d-lg-flex float-right">
          <a href="javascript:void(0)" className="searh-toggle">
            <i className="icon-search" />
          </a>
          <input type="text" className="search_field" placeholder="Search..." defaultValue name="s" />
        </form>
      </div>              
    </div>
    <div className="clearfix" />
  </div>
  <nav id="main-menu" className="stick d-lg-block d-none">
    <div className="container">
      <div className="menu-primary">
        <ul>
          <li className="current-menu-item"><a href="index.html">Home</a></li>
          <li className="menu-item-has-children"><a href="categories.html">Categories</a>
            <ul className="sub-menu">
              <li><a href="categories.html">Politics</a></li>
              <li><a href="categories.html">Health</a></li>
              <li><a href="categories.html">Design</a></li>
            </ul>
          </li>
          <li><a href="typography.html">Typography</a></li>
          <li><a href="categories.html">Politics</a></li>
          <li><a href="categories.html">Health</a></li>
          <li><a href="categories.html">Design</a></li>
          <li><a href="categories.html">Startups</a></li>
          <li><a href="categories.html">Culture</a></li>                                
          <li><a href="contact.html">Contact</a></li>
          <li className="menu-item-has-children"><a href="#">More...</a>
            <ul className="sub-menu">
              <li><a href="search.html">Search</a></li>
              <li><a href="author.html">Author</a></li>
              <li><a href="404.html">404</a></li>                                
            </ul>
          </li>                            
        </ul>
        <span />
      </div>
    </div>
  </nav>        
</header>

    )
  }
}
export default Header;