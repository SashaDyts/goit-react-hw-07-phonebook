import React from 'react';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filter-slice';
import { getFilter } from 'redux/filter/filter-selectors';
import { getFilteredContacts } from 'redux/contacts/constacts-selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getFilteredContacts);

  if (contacts.length < 1) {
    return <p>Contacts list is empty</p>;
  }

  return (
    <label>
      <p>Find contacts by name</p>
      <input
        value={filter}
        type="text"
        onChange={e => {
          dispatch(setFilter(e.target.value));
        }}
      />
    </label>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string,
//   addFilterValue: PropTypes.func.isRequired,
// };

export default Filter;
