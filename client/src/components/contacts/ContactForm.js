import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';
// import ImageUpload from './ImageUpload';
import ContactImage from './contactImage';

const ContactForm = () => {
  const initialContactState = {
    name: '',
    email: '',
    phone: '',
    // description: '',
    type: 'personal',
    photo: {}
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

  const { name, email, phone, type, photo } = contact;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  /// Check photo size and format
  const alertMsg = photo => {
    const types = ['image/png', 'image/jpeg', 'image/gif'];

    if (types.every(type => photo.type !== type)) {
      alert(`${photo.type} are not supported!`);
      return;
    }
    if (photo.size > 1500000) {
      alert(
        `${photo.name} is too large please pick smaller photo (less than 1.5mb)`
      );
      return;
    }
    return false;
  };

  // Upload Photo
  const setPhoto = e => {
    const photoFile = e.target.files[0];
    if (alertMsg(photoFile) === false)
      setContact({ ...contact, [e.target.name]: e.target.files[0] });
  };

  const onSubmit = e => {
    e.preventDefault();

    const formData = new FormData();

    if (!alertMsg) setPhoto(e);

    formData.append('myImage', photo);
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };

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

  console.log(contact);

  return (
    <form className='text-primary' onSubmit={onSubmit}>
      <h2>{current ? 'Edit Contact' : 'Add Contact'}</h2>
      <ContactImage path={photo} />
      <input type='file' name='photo' onChange={setPhoto} />
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
