//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Components
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';
import SideBar from './Global/SideBar';

//Assets
import './Global/css/general.css';

//Data
import list from '../data/side';

class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired
  }

  render() {
    const {children} = this.props;
    return (
      <div className="App">
        <div className="Contents">
            <SideBar list={list}/>
            <Content body={children}/>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
