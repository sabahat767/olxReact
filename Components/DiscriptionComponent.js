import React  from 'react';
import Navigation from '../Components/Navigation';
import ListNavigation from '../Components/ListNavigation';
import image from '../images/add2.PNG';
import Footer from '../Components/Footer';
import {Navbar} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';

import '../App.css';

class Discription extends React.Component{
    render(){
        return(
            <div>
<Navigation/> 
 <ListNavigation/> 
 <Navbar bg="white" className="sticky-top" >
  {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
  {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
  <Navbar.Collapse id="basic-navbar-nav" >
    <Nav className="mr-auto">
      <Nav.Link href="#Home " className="text-muted font">Home/</Nav.Link>
      <Nav.Link href="#Mobile " className="text-muted font">Mobile Phones/</Nav.Link>
      <Nav.Link href="#MobileInSindh " className="text-muted font">Mobiles in Sindh/</Nav.Link>
      <Nav.Link href="#MobileInSindh " className="text-muted font">Mobiles in Karachi/</Nav.Link>
      <Nav.Link href="#MobileInSindh " className="text-muted font">Mobiles in Sadar</Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>
<div className="conatiner m-auto ">
<img src={image} width={1100} height={200} className="ml-5 mr-5" alt="" />

</div>
    <Footer/>

            </div>
        )
    }
}
export default Discription;