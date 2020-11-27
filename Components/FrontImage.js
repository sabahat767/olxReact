import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import jamboBack from '../images/jamboBack.PNG';

class FrontImage extends React.Component{
    render(){
        return(
            <div>
  <img src={jamboBack} width={'100%'} height={'100%'}  alt="" />
            </div>
        )
    }
}
export default FrontImage;