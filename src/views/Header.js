import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <div className="nav-wrapper">
        <ul className="left">
          <li>
            <Link to="/" activeClassName="active" onlyActiveOnIndex>
              Home
            </Link>
          </li>
          <li>
            <Link to="/adopta" activeClassName="active">
              Adopta
            </Link>
          </li>
          <li>
            <Link to="/about" activeClassName="active">
              About
            </Link>
          </li>
          <li>
            <Link to="/ejemplo-not-found" activeClassName="active">
              Not Found
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
