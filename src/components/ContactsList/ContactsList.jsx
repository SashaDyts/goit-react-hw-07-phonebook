import React from 'react';
import {
  ContactList,
  ContactListItem,
  DeleteContactBtn,
} from './ContactsList.styled';
import PropTypes from 'prop-types';

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

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
