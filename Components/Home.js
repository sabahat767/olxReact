import React from 'react';
import Navigation from '../Components/Navigation';
import ListNavigation from '../Components/ListNavigation';
import FrontImage from '../Components/FrontImage';
import Foot from '../Components/FootStart';
import {Carousel} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {CardComponent,FreshRecom} from '../Components/CardComponent';
import Footer from '../Components/Footer';
import {Link} from 'react-router-dom';
import '../App.css';
class Home extends React.Component{
    render(){
      return(
      <div>
          <Navigation/> 
 <ListNavigation/> 
<FrontImage/>
<Container fluid className="bgCrousel">
  <h3>More On Mobile Phones</h3>
<Carousel>
  <Carousel.Item>
  <div className="row">
        <div className="col-sm-3 p-2 d-flex justify-content-sm-between"><Link to='/Discription' className="text-dark"><CardComponent/></Link></div>
        <div className="col-sm-3 p-2 d-flex justify-content-sm-between"><CardComponent/></div>
        <div className="col-sm-3 p-2 d-flex justify-content-sm-between"><CardComponent/></div>
        <div className="col-sm-3 p-2 d-flex justify-content-sm-between"><CardComponent/></div>

      </div>
  </Carousel.Item>

  <Carousel.Item>
    <div className="row">
    <div className="col-sm-3 p-2 d-flex justify-content-sm-between"><CardComponent/></div>
        <div className="col-sm-3 p-2 d-flex justify-content-sm-between"><CardComponent/></div>
        <div className="col-sm-3 p-2 d-flex justify-content-sm-between"><CardComponent/></div>
        <div className="col-sm-3 p-2 d-flex justify-content-sm-between"><CardComponent/></div>

      </div> 
  </Carousel.Item>

  <Carousel.Item>
  <div className="row">
  <div className="col-sm-3 p-2 d-flex justify-content-sm-between"><CardComponent/></div>
        <div className="col-sm-3 p-2 d-flex justify-content-sm-between"><CardComponent/></div>
        <div className="col-sm-3 p-2 d-flex justify-content-sm-between"><CardComponent/></div>
        <div className="col-sm-3 p-2 d-flex justify-content-sm-between"><CardComponent/></div>

      </div>
  </Carousel.Item>
</Carousel>
</Container>
<h3>Fresh Recommendations</h3>
<FreshRecom/>
<FreshRecom/> 
<Foot/>
<Footer/>

      </div>
      )
    }
}
export default Home;