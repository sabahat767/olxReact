import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from '../Components/Home'
import Discription from '../Components/DiscriptionComponent'
class AppRouter extends React.Component{
    render(){
        return(
            <div>
<Router>
    <Route exact path='/' component={Home}/>
    <Route exact path='/Discription' component={Discription}/>
</Router>
            </div>
        )
    }
}
export default AppRouter;