import React from "react";

class Navpc extends React.Component {
  listener = null;
  state = {
    nav:false
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
     window.removeEventListener('scroll');
   }
   handleScroll= () => {
    if (window.pageYOffset > 140) {
        if(!this.state.nav){
          this.setState({ nav: true });
        }
    }else{
        if(this.state.nav){
          this.setState({ nav: false });
        }
    }

  }
  render() {
    return(
      <>
        <nav id="main-menu" className={this.state.nav ? 'stick d-lg-block d-none scroll-to-fixed-fixed' : 'stick d-lg-block d-none'}>
        <div className="container">
          <div className="menu-primary">
            <ul className="d-flex justify-content-between">
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
</>

    )
  }
}
export default Navpc;