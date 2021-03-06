import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../context/alerts/alertContext";
import AuthContext from "../../context/auth/authContext";

const Register = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { registerUser, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) props.history.push("/");

    if (error === "User already exist!") {
      setAlert(error, "danger");
      clearErrors();
    }
    return () => {};
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const onsubmit = e => {
    e.preventDefault();
    if (name === "" || email === "" || password === "" || password2 === "") {
      setAlert("Please enter all fields", "danger");
    } else if (password !== password2) {
      setAlert("Password should match!", "danger");
    } else {
      registerUser({
        name,
        email,
        password
      });
      console.log("Register submit", user);
    }
  };

  const { name, email, password, password2 } = user;
  const onchange = e => setUser({ ...user, [e.target.name]: e.target.value });

  return (
    <div className="form-container">
      <h1>
        <span className="text-primary">Create </span>Account
      </h1>
      <form onSubmit={onsubmit}>
        <div className="form-group">
          <label htmlFor="name" className="text-primary">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={onchange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="text-primary">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={onchange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name" className="text-primary">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            autoComplete="password"
            value={password}
            onChange={onchange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name" className="text-primary">
            Repeat your password
          </label>
          <input
            id="password2"
            type="password"
            name="password2"
            autoComplete="password2"
            value={password2}
            onChange={onchange}
          />
        </div>
        <input
          type="submit"
          value="Register"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default Register;
