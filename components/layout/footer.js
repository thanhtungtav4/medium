import React from "react";
class Footer extends React.Component {
  render() {
    return (
        <footer className="mt-5">
          <div className="container">
            <div className="divider" />
            <div className="row">
              <div className="col-md-6 copyright text-xs-center">            
                <p>Copyright ?? 2019 Merinda inc. Designed by <a href="#">AliThemes.com</a></p>
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
    );
  }
}
export default Footer;