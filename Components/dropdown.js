import React,{state} from 'react';
//import ReactDOM from 'react-dom';
import '@progress/kendo-theme-default/dist/all.css';
//import { DropDownList } from './@progress/kendo-react-dropdown';
import {Dropdown} from 'react-bootstrap';
class AppComponent extends React.Component {
    constructor(){
        super()
    this.state = {
    location:[ "Punjab", "Islamabad", "Sindh", "KPK" ],
       
    };

    }
    
    // handleChange = (event) => {
    //     this.setState({
    //         value: event.target.value
    //     });
    // }

    render() {
        return (
           
                /* <ul>
                    {this.state.location.map((v,i)=>{
                        return <li key={i} >{v}</li>
                    })}
                        
                    
                </ul> */
                <Dropdown>
  <Dropdown.Toggle  id="dropdown-basic"><i className='fa fa-search'></i>
    Pakistan
  </Dropdown.Toggle>

  <Dropdown.Menu>
  {this.state.location.map((v,i)=>{
                        return  <Dropdown.Item key={i} href="#/action-1"><i className='fa fa-map-marker'></i>  {v}</Dropdown.Item>
                    })}
   
    {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
  </Dropdown.Menu>
</Dropdown>
                
        );
}

}

export default AppComponent;