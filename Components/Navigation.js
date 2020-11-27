import React  from 'react';
import logo from '../images/olxLogo.png';
// import {Navbar} from 'react-bootstrap';
// import {NavDropdown} from 'react-bootstrap';
// import {Nav} from 'react-bootstrap';
import ListNavigation from '../Components/ListNavigation';
import AppComponent from '../Components/dropdown';
import LoginModal from '../Components/loginmodal';

 class Navigation extends React.Component{
    render()
    {
     
        return(
            <div >
              <nav className="navbar navbar-light bg-light fixed-top justify-content-between" >
              <a className="navbar-brand" href="#">
        <img src={logo} width={60} height={30}  alt="" />
      </a>
        <AppComponent/>
        <form className="form-inline m-auto">
          <input className=" search " type="search" placeholder="Search" aria-label="Search" />
          
          <button className="btn btn-dark mr-5" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
         
        </form>
        <form className="form-inline">
        
          {/* <button className="sell " type="submit" ><i className="fa fa-plus" aria-hidden="true" /> SELL</button> */}
        <LoginModal/>
        </form>
      </nav>
           
      <ListNavigation/>
     
            </div>
        )
    }
}
export default Navigation