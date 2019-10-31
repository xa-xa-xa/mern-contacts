import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title, icon }) => {
  return (
    <div>
      <div className='navbar bg-primary'>
        <h1>
          <i className={icon}> {title}</i>
        </h1>
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
