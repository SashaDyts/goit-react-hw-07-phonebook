import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, addFilterValue }) => {
  return (
    <label>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={e => {
          addFilterValue(e.currentTarget.value);
        }}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  addFilterValue: PropTypes.func.isRequired,
};

export default Filter;
