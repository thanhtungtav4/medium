import React from "react";
import LazyLoad from 'react-lazyload';
class Footer extends React.Component {
  componentDidMount() {
    console.log('I was triggered during componentDidMount')
  }
  render() {
    return (
      <LazyLoad>
        <footer className="mt-5">
        <div className="container">
          <div className="divider" />
          <div className="row">
            <div className="col-md-6 copyright text-xs-center">            
              <p>Copyright ?? 2019 Merinda inc. Designed by <a href="https://alithemes.com">AliThemes.com</a></p>
            </div>
            <div className="col-md-6">           
              <ul className="social-network inline text-md-right text-sm-center">
                <li className="list-inline-item"><a href="#"><i className="icon-facebook" /></a></li>
                <li className="list-inline-item"><a href="#"><i className="icon-twitter" /></a></li>
                <li className="list-inline-item"><a href="#"><i className="icon-behance" /></a></li>
              </ul>
            </div>
          </div>    
        </div>
      </footer>
      </LazyLoad>
    );
  }
}
export default Footer;