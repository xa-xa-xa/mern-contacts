import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { name, email, phone, type, description, id } = contact;
  const { deleteContact } = contactContext;

  const onDelete = () => {
    deleteContact(id);
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
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
        {phone && <li className='fas fa-phone'> {phone}</li>}
      </ul>
      <p>
        <button className='btn btn-dark btn-small'>Edit</button>
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
