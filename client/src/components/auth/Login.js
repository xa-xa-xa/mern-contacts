import React, { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const onsubmit = e => {
    e.preventDefault();
    console.log('Login submit', user);
  };

  const { email, password } = user;
  const onchange = e => setUser({ ...user, [e.target.name]: e.target.value });

  return (
    <div className='form-container'>
      <h1 className='text-primary'>Login in</h1>
      <form onSubmit={onsubmit}>
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
