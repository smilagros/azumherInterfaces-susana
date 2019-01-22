import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

require('../static/scss/App.scss');

const NotFound = () => (
  <div className="wrapper">
    <Header />
    <main>
      <h1> NOT FOUND 404 </h1>
    </main>
    <Footer />
  </div>
);

export default NotFound;
