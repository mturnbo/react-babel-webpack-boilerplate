import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

const Header = ({ title, content }) => (
  <header className="app-header">
    <div className="app-header-title">{title}</div>
    {content && <div className="app-header-content">{content}</div>}
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string
};

export default Header;
