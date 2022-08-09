import React, { Component } from 'react';
import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copelandd', number: '227-91-26' },
    ],
    filter: '',
  };

  addFilterValue = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  formSubmitHandler = data => {
    this.addContact(data);
  };

  addContact = data => {
    const { contacts } = this.state;

    if (this.state.contacts.find(contact => contact.name === data.name)) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    this.setState({
      contacts: [
        ...contacts,
        { name: data.name, number: data.number, id: data.id },
      ],
    });
  };

  deleteContact = id => {
    // console.log(this.state.contacts);
    const newContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );

    this.setState({ contacts: newContacts });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <>
        <h2>PhoneBook</h2>

        <Form onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter
          value={this.state.filter}
          addFilterValue={this.addFilterValue}
        />
        <ContactsList
          contacts={filteredContacts || this.state.contacts}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}
