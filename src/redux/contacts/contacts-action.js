import { nanoid } from 'nanoid';

import { ADD_BOOK, REMOVE_CONTACT } from '../contacts/contacts-type';

export const addContact = payload => {
  return {
    type: ADD_BOOK,
    payload: {
      id: nanoid(),
      ...payload,
    },
  };
};

export const removeContact = payload => {
  return {
    type: REMOVE_CONTACT,
    payload,
  };
};
