export const getContacts = state => state.contacts;

export const getFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts.items;
  }

  const normalizedFilter = filter.toLowerCase();

  return contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
