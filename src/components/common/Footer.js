import React from 'react';
import { Link } from 'react-router-dom';
import IconGitHub from '../../static/img/github-box.png';
import IconLinkedin from '../../static/img/linkedin-box.png';

const Footer = () => (
  <footer className="page-footer">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <Link
            className="right"
            to="https://www.linkedin.com/in/judit-sanchez-jh/"
            rel="noopener noreferrer"
            target="_blank"
          >
            //<img src={IconLinkedin} alt="Linkedin" />
          </Link>
          <Link
            className="right"
            to="https://github.com/JodieHag/react-router-v3-example"
            rel="noopener noreferrer"
            target="_blank"
          >
            //<img src={IconGitHub} alt="GitHub" />
          </Link>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
      © 2017 Judit Sánchez
        <Link
          className="grey-text text-lighten-4 right"
          to="http://www.jodiehag.com"
          rel="noopener noreferrer"
          target="_blank"
        >JodieHag</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
