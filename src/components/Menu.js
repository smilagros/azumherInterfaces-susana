import React, { Component } from 'react';
import { BrowserRouter, Router,Route, Switch, Redirect ,Link} from 'react-router-dom';
import OrdenService from './OrdenService';
import Home from './Home';
import Navegacion from './Navegacion';


class Menu extends Component{

  render(){
    return(
      <div>
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/OrdenService">OrdenService</Link>
          </li>
        </ul>
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/OrdenService" component={OrdenService} />
      </div>
    </Router>
      </div>



    );
  }
}

export default Menu;
