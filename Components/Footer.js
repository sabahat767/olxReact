import React from 'react';
class Footer extends React.Component{
    changeBackground=(e) => {
       e.target.style.background = 'black';
       e.target.style.color = 'white';
      }
    render(){
        return(
          
          <div>
              
               <footer id="footer" className="footer-1 mt-0 ">
        <div className="main-footer widgets-dark typo-light">
          <div className="container ">
            <div className="row">
              <div className="col-sm-2 p-2 d-flex justify-content-sm-between">
                <div >
                  <h6 >POPULAR CATEGORIES<span /></h6>
                  <p className="text-muted"> 
                  <ul>
                      <li>Cars</li>
                      <li>Flats for rent</li>
                      <li>Jobs</li>
                      <li>Mobile Phones</li>
                      </ul>
                      </p>
                </div>
              </div>
              <div className="col-sm-2 p-2  d-flex justify-content-sm-between">
                <div >
                  <h6 >TRENDING SEARCHES<span /></h6>
                  <p className="text-muted"> 
                  <ul>
                      <li>Bikes</li>
                      <li>Watches</li>
                      <li>Books</li>
                      <li>Dogs</li>
                      </ul>
                      </p>
                 </div>
              </div>
              <div className="col-sm-3 p-2 d-flex justify-content-sm-between">
              <div >
                  <h6 >ABOUT US<span /></h6>
                  <p className="text-muted"> 
                  <ul>
                      <li><a href="#Bikes" className="text-muted" onMouseOver={(e=>{this.changeBackground(e)})} >OLX Group</a></li>
                      <li>OLX blogs</li>
                      <li>Contact Us</li>
                      <li>OLX for Business</li>
                      </ul>
                      </p>
                 </div>
              </div>
              <div className="col-sm-2 p-2 d-flex justify-content-sm-between">
                <div >
                  <h6 >OLX<span /></h6>
                  <p className="text-muted"> 
                  <ul>
                      <li><a href="#Bikes" className="text-muted">Help</a></li>
                      <li>Sitemap</li>
                      <li>Legal And Privacy Information</li>
                      
                      </ul>
                      </p>
                </div>
              </div>
              <div className="col-sm-2 p-2 d-flex justify-content-sm-between">
                <div >
                  <h6>FOLLOW Us<span /></h6>
                  <p><i className="fa fa-facebook-official" aria-hidden="true"></i><i className="fa fa-twitter p-2" aria-hidden="true"></i><i className="fa fa-play-circle p-2" aria-hidden="true"></i><i className="fa fa-instagram p-2" aria-hidden="true"></i></p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 text-center">
                <p className="text-white text-sm-left">Other Countries India-South Africa-Idonesia</p>
              </div>
              <div className="col-sm-6 text-center">
              <p className="text-white text-sm-right">Free Classified in Pakistan © 2016-2020 OLX</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
          </div>  
        )
    }
}
export default Footer;