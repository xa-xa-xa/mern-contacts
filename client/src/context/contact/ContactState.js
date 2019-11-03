import React, { useReducer } from 'react';
import uuid from 'uuid/v4';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jill Popova',
        email: 'jill@mail.com',
        phone: '111-111-1111',
        type: 'professional'
      },
      {
        id: 2,
        name: 'Sara Ivanova',
        email: 'sara@mail.com',
        phone: '222-222-2222',
        type: 'personal'
      },
      {
        id: 3,
        name: 'Harry Potter',
        email: 'harry_p@mail.com',
        phone: '333-333-3333',
        type: 'personal'
      }
    ],
    current: null, // current contact for 'edit'
    filtered: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // ADD Contact
  const addContact = contact => {
    contact.id = uuid();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // DELETE Contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  // SET CURRENT Contact
  const setCurrentContact = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // CLEAR CURRENT Contact
  const clearCurrentContact = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  // UPDATE CURRENT Contact
  const updateCurrentContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };
  // FILTER Contacts
  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };

  // CLEAR Filter
  const clearFilter = text => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrentContact,
        clearCurrentContact,
        updateCurrentContact,
        filterContacts,
        clearFilter
      }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
