import React, { Fragment, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/contact/contactContext";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout, user, loadUser } = authContext;
  const { clearContacts } = contactContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const onLogOut = () => {
    logout();
    clearContacts();
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && `${user.name} `}</li>
      <li>
        <span className="hide-sm"> Log out</span>
        <a onClick={onLogOut} href="#!">
          <i className="fas fa-sign-out-alt" />
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">
          Log in <i className="fas fa-sign-in-alt" />
        </Link>
      </li>
    </Fragment>
  );

  return (
    <div>
      <div className="navbar bg-primary">
        <h1>
          <Link to="/">
            <i className={icon}> {title}</i>
          </Link>
        </h1>
        <ul>
          {/* <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li> */}
          {isAuthenticated ? authLinks : guestLinks}
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
  title: "Contacts",
  icon: "fa fa-id-card-alt"
};

export default Navbar;
