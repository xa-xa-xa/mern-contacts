import React, { useContext, useEffect } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/contactFilter';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='grid-2'>
      <ContactForm />
      <div>
        {' '}
        <h2 className='text-left text-center'>Contacts List:</h2>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
