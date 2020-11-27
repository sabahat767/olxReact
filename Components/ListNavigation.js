import React, { Component }  from 'react';
import {Navbar} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Container,Col,Row} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import AppRouter from '../Components/Router';
import {Link} from 'react-router-dom';
import '../App.css'

class ListNavigation extends React.Component{
  constructor(){
    super()
    this.state={
     
        items:{
          head:[
          'Vehicles',
            'Animals',
            'Fashion & Beauty',
            'Services'
          ],
        innerItems:['Tractors & Trailers',
        'Other Animals',
        'Other Fashion',
        'Farm & Fresh Food'

        ]}
        

      
    }
  }
render(){
    return(
        <div>
         <Navbar bg="white" className="sticky-top" >
  {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
  {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
  <Navbar.Collapse id="basic-navbar-nav" >
    <Nav className="mr-auto">
    <NavDropdown title="All Categories" className="text-dark" id="basic-nav-dropdown" >
    <Container fluid >
    <Table responsive>
  <thead>
    <tr>
      {this.state.items.head.map((v, i) => (
        <th key={i} width={30}>{v}</th>
      ))}
    </tr>
  </thead>
  <tbody>
    <tr>
      
      {this.state.items.innerItems.map((_, index) => (
        <td key={index}><Link className="text-dark">{_}</Link></td>
      ))}
    </tr>
    <tr>
      
      {Array.from({ length: 4 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))}
    </tr>
    <tr>
      
      {Array.from({ length: 4 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))}
    </tr>
  </tbody>
</Table>
  {/* <Row sm={6}>
    <Col sm={3}>
    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </Col>
    <Col sm={3}>
    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </Col>
  </Row> */}
</Container>

      </NavDropdown>
      <Nav.Link href="#MobilePhones " className="text-dark">Mobile Phones</Nav.Link>
      <Nav.Link href="#Cars" className="text-dark">Cars</Nav.Link>
      <Nav.Link href="#Motorcycles" className="text-dark">Motorcycles</Nav.Link>
      <Nav.Link href="#Houses" className="text-dark">Houses</Nav.Link>
      <Nav.Link href="#TV-Video-Audio" className="text-dark">TV-Video-Audio</Nav.Link>
      <Nav.Link href="#Tablets" className="text-dark">Tablets</Nav.Link>
      <Nav.Link href="#Lands & Plots" className="text-dark">Lands & Plots</Nav.Link>



      
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}
}
export default ListNavigation;