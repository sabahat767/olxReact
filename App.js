import React from 'react';
import Home from './Components/Home';
import Discription from './Components/DiscriptionComponent'
import AppRouter from './Components/Router';
import './App.css';


class App extends React.Component{
  render(){
    return(
      <div>
        {/* <Home/> */}
        {/* <Discription/> */}
        <AppRouter/>
      </div>
//     <div>
//  <Navigation/> 
//  <ListNavigation/> 
 

// <FrontImage/>
//  <Container fluid className="bgCrousel">
//   <h3>More On Mobile Phones</h3>
// <Carousel>
//   <Carousel.Item>
//   <div className="row">
//         <div className="col-sm-3 p-2 d-flex justify-content-sm-between"><CardComponent/></div>
//         <div className="col-sm-3 p-2 d-flex justify-content-sm-between"><CardComponent/></div>
//         <div className="col-sm-3 p-2 d-flex justify-content-sm-between"><CardComponent/></div>
//         <div className="col-sm-3 p-2 d-flex justify-content-sm-between"><CardComponent/></div>

//       </div>
//   </Carousel.Item>

//   <Carousel.Item>
//     <div className="row">
//     <div className="col-sm-3 p-2 d-flex justify-content-sm-between"><CardComponent/></div>
//         <div className="col-sm-3 p-2 d-flex justify-content-sm-between"><CardComponent/></div>
//         <div className="col-sm-3 p-2 d-flex justify-content-sm-between"><CardComponent/></div>
//         <div className="col-sm-3 p-2 d-flex justify-content-sm-between"><CardComponent/></div>

//       </div> 
//   </Carousel.Item>

//   <Carousel.Item>
//   <div className="row">
//   <div className="col-sm-3 p-2 d-flex justify-content-sm-between"><CardComponent/></div>
//         <div className="col-sm-3 p-2 d-flex justify-content-sm-between"><CardComponent/></div>
//         <div className="col-sm-3 p-2 d-flex justify-content-sm-between"><CardComponent/></div>
//         <div className="col-sm-3 p-2 d-flex justify-content-sm-between"><CardComponent/></div>

//       </div>
//   </Carousel.Item>
// </Carousel>
// </Container>
// <h3>Fresh Recommendations</h3>
// <FreshRecom/>
// <FreshRecom/> 
// <Footer/>

//     </div>
    )
  }
}
// function App() {
//   return (
//     <div>

//     </div>
//   );
// }

export default App;
