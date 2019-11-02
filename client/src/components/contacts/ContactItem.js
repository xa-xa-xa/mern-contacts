import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ contact }) => {
  const { name, email, phone, type, description } = contact;

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
        <button className='btn btn-danger btn-small'>Delete</button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
