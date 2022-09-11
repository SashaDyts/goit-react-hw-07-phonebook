import React, { useState, useEffect } from 'react';
import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function formSubmitHandler(data) {
    addContact(data);
  }

  function addContact(data) {
    if (contacts.find(contact => contact.name === data.name)) {
      alert(`${data.name} is already in contacts`);
      return;
    }

    setContacts([
      ...contacts,
      { name: data.name, number: data.number, id: data.id },
    ]);
  }

  function deleteContact(id) {
    const newContacts = contacts.filter(contact => contact.id !== id);

    setContacts(newContacts);
  }

  function getFilteredContacts() {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  return (
    <>
      <h2>PhoneBook</h2>

      <Form onSubmit={formSubmitHandler} />
      {contacts.length > 0 ? (
        <>
          <h2>Contacts</h2>
          <Filter value={filter} addFilterValue={setFilter} />
          <ContactsList
            contacts={getFilteredContacts() || contacts}
            deleteContact={deleteContact}
          />
        </>
      ) : (
        <p>Contacts list is empty</p>
      )}
    </>
  );
}

export default App;
