import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';
import ContactImage from './contactImage';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { name, email, phone, type, _id, photo } = contact;
  const {
    deleteContact,
    setCurrentContact,
    clearCurrentContact
  } = contactContext;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrentContact();
  };

  return (
    <div className='card bg-light shadow-sm m-1'>
      <ContactImage />
      <h3 className='text-dark text-left'>
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={`badge badge-${
            type === 'professional' ? 'success' : 'primary'
          }`}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className='list'>
        {email && <li className='fas fa-envelope'> {email}</li>}
        <br />
        {phone && (
          <li className='fas fa-phone text-dark'>
            {' '}
            <span>{phone}</span>
          </li>
        )}
      </ul>
      <p>
        <button
          className='btn btn-dark btn-small'
          onClick={() => setCurrentContact(contact)}>
          Edit
        </button>
        <button className='btn btn-danger btn-small' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
