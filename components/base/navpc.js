import React from "react";
import Link from 'next/link';
import API from "../../lib/api";

class Navpc extends React.Component {
  listener = null;
  constructor(props){
    super(props);
    this.state = {
      nav:false,
      menus: [],
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    API.get('/menu')
    .then(res => {
      this.setState({
        menus: res.data
      })
    })
    .catch(err =>console.log(err));
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
    var Menus = this.state.menus;
    return(
        <nav id="main-menu" className={this.state.nav ? 'stick d-lg-block d-none scroll-to-fixed-fixed' : 'stick d-lg-block d-none'}>
          <div className="container">
            <div className="menu-primary">
              <ul className="d-flex justify-content-between">
              {Menus.map((item) => (
                <li className="current-menu-item" key={item.ID}><Link href={item.url}>{item.title}</Link></li>
                ))}
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

    )
  }
}
export default Navpc;