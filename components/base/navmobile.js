import React from "react";
import Image from 'next/image';
class NavMobile extends React.Component {
  constructor(props) {
    super(props);
    this.jsMenu = this.jsMenu.bind(this);
    this.jsMenuChild = this.jsMenuChild.bind(this);
    this.state = {
      is_open: false,
      is_openChild: false,
    };
  }
  jsMenu = () => {
    const currentState = this.state.is_open;
    this.setState({
      is_open: !currentState
    });
  }
  jsMenuChild= () =>{
    const currentStateChild = this.state.is_openChild;
    this.setState({
      is_openChild: !currentStateChild
    });
  }
  render() {
    return(
      <>
  <div className="sticky-header fixed d-lg-none d-md-block">
    <div className="text-right">
      <div className="container mobile-menu-fixed pr-5"> 
        <h1 className="logo-small navbar-brand"><a href="index.html" className="logo">Merinda</a></h1>
        <a className="author-avatar" href="#">
          <Image src="/static/images/author-avata-1.jpg" width={32}
      height={32} alt="true"/>
        </a>
        <ul className="social-network heading navbar-nav d-lg-flex align-items-center">                       
          <li><a href="#"><i className="icon-facebook" /></a></li>
        </ul>
        <a onClick={() => this.jsMenu()} className={this.state.is_open ? 'menu-toggle-icon act' : 'menu-toggle-icon'}>
          <span className="lines" />
        </a>
      </div> 
    </div>         
    <div className={this.state.is_open ? 'mobi-menu act' : 'mobi-menu'}>
      <div className="mobi-menu__logo">
        <h1 className="logo navbar-brand"><a href="index.html" className="logo">Merinda</a></h1>
      </div>
      <form action="#" method="get" className="menu-search-form d-lg-flex">                        
        <input type="text" className="search_field" placeholder="Search..."  name="s" />                    
      </form>
      <nav>
        <ul>
          <li className="current-menu-item"><a href="index.html">Home</a></li>
          <li className={this.state.is_openChild ? 'menu-item-has-children' : 'menu-item-has-children open-submenu'}><a href="categories.html">Categories</a>
            <ul className="sub-menu">
              <li><a href="categories.html">Politics</a></li>
              <li><a href="categories.html">Health</a></li>
              <li><a href="categories.html">Design</a></li>
            </ul>
            <span className="sub-menu-toggle" onClick={() => this.jsMenuChild()}></span>
          </li>
          <li><a href="typography.html">Typography</a>
          </li>
          <li><a href="categories.html">Politics</a></li>
          <li className={this.state.is_openChild ? 'menu-item-has-children' : 'menu-item-has-children open-submenu'}><a href="categories.html">Health</a>
            <ul className="sub-menu">
                <li><a href="categories.html">Politics</a></li>
                <li><a href="categories.html">Health</a></li>
                <li><a href="categories.html">Design</a></li>
            </ul>
            <span className="sub-menu-toggle" ></span>
          </li>                             
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