import React, {Component} from 'react';

import Orders from '../components/orders/Orders'
class Home extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col-md-3 text-center">
          </div>
          <div className="col-md-9">
          <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/">	Ordenes de Servicio</a>
          </nav>
          <div className="text-right mt-3 mb-3">
            <button className="btn btn-azumher">
              <i className="fas fa-plus-circle fa-2x"><span className="h5 ml-2">Añadir Orden</span></i>
            </button>
          </div>
          <Orders />
          </div>
        </div>
      </div>
    );
  }
}


export default Home;
