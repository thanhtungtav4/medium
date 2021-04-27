import React from "react";

class NavMobile extends React.Component {
  render() {
    return(
      <>
  <div className="top-scroll-bar" />
  {/*Mobile navigation*/}
  <div className="sticky-header fixed d-lg-none d-md-block">
    <div className="text-right">
      <div className="container mobile-menu-fixed pr-5"> 
        <h1 className="logo-small navbar-brand"><a href="index.html" className="logo">Merinda</a></h1>
        <a className="author-avatar" href="#"><img src="static/images/author-avata-1.jpg" alt /></a>
        <ul className="social-network heading navbar-nav d-lg-flex align-items-center">                       
          <li><a href="#"><i className="icon-facebook" /></a></li>
        </ul>
        <a href="javascript:void(0)" className="menu-toggle-icon">
          <span className="lines" />
        </a>
      </div> 
    </div>         
    <div className="mobi-menu">
      <div className="mobi-menu__logo">
        <h1 className="logo navbar-brand"><a href="index.html" className="logo">Merinda</a></h1>
      </div>
      <form action="#" method="get" className="menu-search-form d-lg-flex">                        
        <input type="text" className="search_field" placeholder="Search..." defaultValue name="s" />                    
      </form>
      <nav>
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
          <li><a href="contact.html">Contact</a></li>                           
        </ul>
      </nav>                
    </div>
  </div>
  {/*Mobile navigation*/}
</>

    )
  }
}
export default NavMobile;