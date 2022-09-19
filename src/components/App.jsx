import React, { useState } from 'react';
import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import { useLocalStorage } from 'hooks/useLocalStorage';

const contactsDefault = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  // const [contacts, setContacts] = useLocalStorage('contacts', contactsDefault);
  // const [filter, setFilter] = useState('');

  // function formSubmitHandler(data) {
  //   addContact(data);
  // }

  // function addContact(data) {
  //   if (contacts.find(contact => contact.name === data.name)) {
  //     alert(`${data.name} is already in contacts`);
  //     return;
  //   }

  //   setContacts([
  //     ...contacts,
  //     { name: data.name, number: data.number, id: data.id },
  //   ]);
  // }

  // function deleteContact(id) {
  //   const newContacts = contacts.filter(contact => contact.id !== id);

  //   setContacts(newContacts);
  // }

  // function getFilteredContacts() {
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // }

  // return (
  //   <>
  //     <h2>PhoneBook</h2>

  //     <Form onSubmit={formSubmitHandler} />
  //     {contacts.length > 0 ? (
  //       <>
  //         <h2>Contacts</h2>
  //         <Filter value={filter} addFilterValue={setFilter} />
  //         <ContactsList
  //           contacts={getFilteredContacts() || contacts}
  //           deleteContact={deleteContact}
  //         />
  //       </>
  //     ) : (
  //       <p>Contacts list is empty</p>
  //     )}
  //   </>
  // );

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
