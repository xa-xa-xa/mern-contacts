import React, { useReducer } from 'react';
import uuid from 'uuid';
import contactContext from './contactContext';
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
        id: 'Jill Popova',
        email: 'jill@mail.com',
        phone: '111-111-1111',
        type: 'professional'
      },
      {
        id: 'Sara Ivanova',
        email: 'sara@mail.com',
        phone: '222-222-2222',
        type: 'personal'
      },
      {
        id: 'Harry Potter',
        email: 'harry_p@mail.com',
        phone: '333-333-3333',
        type: 'personal'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // ADD Contact
  // DELETE Contact
  // SET CURRENT Contact
  // DELETE CURRENT Contact
  // UPDATE CURRENT Contact
};
