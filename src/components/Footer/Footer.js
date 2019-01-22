import React from 'react';
import './Footer.scss';

const Footer = ({ title }) => (
  <footer className="app-footer">
    <div className="app-footer-title">{title}</div>
  </footer>
);

export default Footer;
