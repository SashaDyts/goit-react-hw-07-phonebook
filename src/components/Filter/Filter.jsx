import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filter-actions';
import { getFilter } from 'redux/filter/filter-selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
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
