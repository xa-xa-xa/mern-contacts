import React, { Fragment, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;

  if (!contacts.length) {
    return (
      <Fragment>
        <h2 className='text-left text-center'>Contacts List:</h2>
        <h4>Please add contacts...</h4>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <h2 className='text-left'>Contacts List:</h2>

      {filtered
        ? filtered.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        : contacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
      {}
    </Fragment>
  );
};

export default Contacts;
