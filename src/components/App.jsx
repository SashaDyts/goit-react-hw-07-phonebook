import React from 'react';
import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

function App() {
  return (
    <>
      <h2>PhoneBook</h2>

      <Form />

      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </>
  );
}

export default App;
