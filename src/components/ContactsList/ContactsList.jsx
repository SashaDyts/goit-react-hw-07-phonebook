import React, { useEffect } from 'react';
import {
  ContactList,
  ContactListItem,
  DeleteContactBtn,
} from './ContactsList.styled';
// import PropTypes from 'prop-types';
import {
  removeContact,
  fetchContacts,
} from 'redux/contacts/contacts-operations';

import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/constacts-selectors';

const ContactsList = () => {
  const contacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('go');
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactList>
      {contacts.map(({ id, number, name }) => {
        return (
          <ContactListItem key={id}>
            {name}: {number}
            <DeleteContactBtn
              onClick={() => {
                dispatch(removeContact(id));
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

// ContactsList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   deleteContact: PropTypes.func.isRequired,
// };

export default ContactsList;
