import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
  const initialContactState = {
    name: '',
    email: '',
    phone: '',
    // description: '',
    type: 'personal'
  };

  const contactContext = useContext(ContactContext);
  const { current, clearCurrentContact, updateCurrentContact } = contactContext;

  useEffect(() => {
    if (current) {
      setContact(current);
    } else {
      setContact(initialContactState);
    }
    // eslint-disable-next-line
  }, [contactContext, current]);

  // Component Level State
  const [contact, setContact] = useState(initialContactState);

  const { name, email, phone, type } = contact;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (!current) {
      contactContext.addContact(contact);
    } else {
      updateCurrentContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrentContact();
  };

  return (
    <form className='text-primary' onSubmit={onSubmit}>
      <h2>{current ? 'Edit Contact' : 'Add Contact'}</h2>
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
        onChange={onChange}
        value='personal'
        checked={type === 'personal'}
      />{' '}
      Personal{' '}
      <input
        type='radio'
        name='type'
        onChange={onChange}
        value='professional'
        checked={type === 'professional'}
      />{' '}
      Professional{' '}
      <div>
        <input
          type='submit'
          onChange={onSubmit}
          value={current ? 'Save Changes' : 'Add Contact'}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
