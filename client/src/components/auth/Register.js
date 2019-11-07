import React, { useState, useContext } from 'react';
import AlertContext from '../../context/alerts/alertContext';

const Register = () => {
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });
  const onsubmit = e => {
    e.preventDefault();
    if (name === '' || email === '' || password === '' || password2 === '') {
      setAlert('Please enter all fields', 'danger');
    } else if (password !== password2) {
      setAlert('Password should match!', 'danger');
    } else {
      console.log('Register submit', user);
    }
  };

  const { name, email, password, password2 } = user;
  const onchange = e => setUser({ ...user, [e.target.name]: e.target.value });

  return (
    <div className='form-container'>
      <h1 className='text-primary'>Account</h1>
      <form onSubmit={onsubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            value={name}
            id=''
            onChange={onchange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            value={email}
            id=''
            onChange={onchange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='name'>Password</label>
          <input
            type='text'
            name='password'
            value={password}
            id=''
            onChange={onchange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='name'>Repeat your password</label>
          <input
            type='text'
            name='password2'
            value={password2}
            id=''
            onChange={onchange}
          />
        </div>
        <input
          type='submit'
          value='Register'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  );
};

export default Register;
