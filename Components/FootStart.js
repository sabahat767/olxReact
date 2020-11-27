import React from 'react';
import image from '../images/add.jpg';
class Foot extends React.Component{
    render(){
        return(
            <div>
                
        <div className="container fluid mb-2">
          <img src={image} width={1150}height={150}/>
        </div>
      </div>
            
        )
    }
}
export default Foot;