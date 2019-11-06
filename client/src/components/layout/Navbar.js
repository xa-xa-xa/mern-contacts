import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
  return (
    <div>
      <div className='navbar bg-primary'>
        <h1>
          <i className={icon}> {title}</i>
        </h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/register'>Regiser</Link>
          </li>
          <li>
            <Link to='/login'>Log in</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Contacts',
  icon: 'fa fa-id-card-alt'
};

export default Navbar;
