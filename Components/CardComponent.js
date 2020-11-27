import React from 'react';
import { Container } from 'react-bootstrap';
import mobile from '../images/mobile.png';


class CardComponent extends React.Component{
    render(){
        return(
            <div>
              <span class="d-sm-inline-flex ">

      <div className="card" style={{width: '20rem'}}>
      <div className="container  card-header">
      <div className="row">
          <ul className="nav nav-pills card-header-pills">
              
            
            <li className="nav-item col-sm-3 ">
              <a className="nav-link   " href="#"><span className="badge badge-warning">Featured</span></a>
            </li>
           
           
            <li className="nav-item col-sm-6 ">
              <a className="nav-link " href="#">
              <img src={mobile} width={150} height={150}  alt="" />

              </a>
            </li>
           
           
            <li className="nav-item col-sm-2 ">
              <a className="nav-link " href="#"><i className="fa fa-heart-o justify-content-end" aria-hidden="true"></i></a>
            </li>
            
          </ul>
          </div>
        </div>
        <div className="card-body bordercard ">
          <h4 className="card-text">Rs 8,500</h4>
          <p className="card-text">Some thing about item</p>
        </div>
      </div>
      </span>
            </div>
        )
    }
}
class FreshRecom extends React.Component{
  render(){
    return(
      <div>
        <Container fluid className="mt-2">
        <div className="row">
  <div className="col-sm-3 p-2 d-flex justify-content-sm-between"><CardComponent/></div>
        <div className="col-sm-3 p-2 d-flex justify-content-sm-between"><CardComponent/></div>
        <div className="col-sm-3  p-2 d-flex justify-content-sm-between"><CardComponent/></div>
        <div className="col-sm-3  p-2 d-flex justify-content-sm-between"><CardComponent/></div>
        
      </div>
      </Container>
      </div>
    )
  }
}
export {CardComponent,FreshRecom} ;