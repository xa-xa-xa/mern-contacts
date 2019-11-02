import React, { useState } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    // description: '',
    type: 'personal'
  });

  const { name, email, phone, type } = contact;
  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    ContactContext.addContact(contact);
    setContact({
      name: '',
      email: '',
      phone: '',
      description: '',
      type: 'personal'
    });
  };

  return (
    <form className='text-primary' onSubmit={onSubmit}>
      <h2>Add Contact</h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        type='email'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onChange}
      />
      <input
        type='phone'
        placeholder='Phone'
        name='phone'
        value={phone}
        onChange={onChange}
      />
      <h5>Contact type</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === 'personal'}
      />{' '}
      Personal{' '}
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === 'professional'}
      />{' '}
      Professional{' '}
      <div>
        <input
          type='submit'
          value='Add Contact'
          className='btn btn-primary btn-block'
        />
      </div>
    </form>
  );
};

export default ContactForm;
