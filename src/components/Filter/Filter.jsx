import React from 'react';

const Filter = ({ value, addFilterValue }) => {
  return (
    <label>
      <p>Find contacts by name</p>
      <input type="text" value={value} onChange={addFilterValue} />
    </label>
  );
};

export default Filter;
