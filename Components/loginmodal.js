import React,{useState} from 'react';
import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Carousel} from 'react-bootstrap';
import item from '../images/item1.jpg';
import item1 from '../images/item2.png';
import item2 from '../images/itme3.jpg';
import '../App.css';
import {set_data,facebook_login} from '../store/action/';
import {connect} from 'react-redux';

import firebase from '../config/firebase'
class LoginModal extends React.Component{
  constructor(){
    super();
    this.state = {
        showHide : false
    }
}

handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide })
}

  render(){
    return(
<div>
  <a className="login" onClick={() => this.handleModalShowHide()}>Login</a>
<Button variant="primary" className="p-2 " style={{borderRadius:50, width:90}} onClick={() => this.handleModalShowHide()}><i className="fa fa-plus" aria-hidden="true" />
SELL
                </Button>
              

                <Modal show={this.state.showHide}>
                <Button  className="btn btn-outline-light" onClick={() => this.handleModalShowHide()}>
                        X
                    </Button>
                    <Modal.Header >
                    <Carousel >
   <Carousel.Item className=" text-center modalimg"> 
       <div>
      <img
      className="d-block w-100 text-center "
      src={item} width={5} height={200}
      alt="First slide"
      
    />
      </div>
   <div>
   <h6 className="text-dark text-center">Help make OLX  safer place to buy and sale</h6>
   </div>
    
  </Carousel.Item>
  <Carousel.Item  className="text-center modalimg">
      <div>
      <img
      className="d-block w-100 text-center"
      src={item1} width={5} height={200}

      alt="First slide"
    />
      </div>
   <div>
   <h6 className="text-dark text-center">Contact and close deals faster</h6>
   </div>
    
  </Carousel.Item>
  <Carousel.Item className=" text-center modalimg">
      <div>
      <img
      className="d-block w-100 text-center"
      src={item2} width={50} height={200}

      alt="First slide"
    />
      </div>
   <div>
   <h6 className="text-dark text-center ">Save all your favourite item in one place</h6>
   </div>
    
  </Carousel.Item>
</Carousel>

                    </Modal.Header>
                    <Modal.Body>
                    <button type="button" className="btn btn-outline-dark form-control mb-3  text-center" ><i className="fa fa-phone" aria-hidden="true" /> Continue with Phone</button>
                    <button type="button" className="btn btn-outline-dark form-control mb-3  text-center" onClick={ () => this.props.facebook_login() } ><i className="fa fa-facebook" aria-hidden="true" /> Continue with facebook</button>
                    <button type="button" className="btn btn-outline-dark form-control mb-3  text-center" ><i className="fa fa-google" aria-hidden="true" /> Continue with Google</button>
                    <button type="button" className="btn btn-outline-dark form-control mb-3  text-center" >Continue with email</button>
                    </Modal.Body>
                    <Modal.Footer>
                    <div className="mr-5 text-center ">
             <p className=" display-5">We won't share your personal details with anyone</p>

             </div>
            <p className="text-center display-5">If you continue, you are accepting <a href="#">OLX Terms and Conditions and Privacy Policy</a></p>
            
                    </Modal.Footer>
                </Modal>

</div>
    )}
}
const mapStateToProps =(state) => ({
  users:state.users
})
const mapDispatchToProps = (dispatch) => ({
//set_data: () => dispatch(set_data()),
facebook_login: () => dispatch(facebook_login()),
})
export default connect(null, mapDispatchToProps)(LoginModal);

