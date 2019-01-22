import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';


const Layout = props => (
  <div className="wrapper">
    <Header />
    <main>
      {props.children}
    </main>
    <Footer />
  </div>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.object.isRequired
};
