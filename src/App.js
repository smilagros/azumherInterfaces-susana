import React, { Component } from 'react';
import { BrowserRouter, Route,Router,IndexRoute,browserHistory,Link, Switch, Redirect } from 'react-router-dom';
import Menu from './components/Menu';
import './App.css';
import Orders from './components/orders/Orders'
import Layout from './views/Layout';
import Home from './components/Home';
import OrdenService from './components/OrdenService';

class App extends Component {
	render() {
			return (
				<div className="App">
				<Orders/>
				</div>
	    );
  }
}

export default App;
