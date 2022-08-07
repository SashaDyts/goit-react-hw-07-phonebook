import React from 'react';
import {
  ContactList,
  ContactListItem,
  DeleteContactBtn,
} from './ContactsList.styled';

const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <ContactList>
      {contacts.map(contact => {
        return (
          <ContactListItem key={contact.id}>
            {contact.name}: {contact.number}
            <DeleteContactBtn
              onClick={() => {
                deleteContact(contact.id);
              }}
            >
              Delete
            </DeleteContactBtn>
          </ContactListItem>
        );
      })}
    </ContactList>
  );
};

export default ContactsList;
