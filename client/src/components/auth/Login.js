import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alerts/alertContext';

const Login = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { setAlert } = alertContext;
  const { loginUser, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'Invalid Credentials') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const onSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please enter your email and password!', 'danger');
    } else {
      loginUser({ email, password });
    }
  };

  const { email, password } = user;
  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  return (
    <div className='form-container'>
      <h1 className='text-primary'>Login in</h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='email'
            name='email'
            value={email}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='name'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            value={password}
            autoComplete='password'
            onChange={onChange}
          />
        </div>

        <input
          type='submit'
          value='Login'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  );
};

export default Login;
