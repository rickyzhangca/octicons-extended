import React from 'react';
import AutosizeInput from 'react-input-autosize';

const Search = ({ autoFocus, value, placeholder, onChange, ariaLabel }) => {
  return (
    <AutosizeInput
      autoFocus={autoFocus}
      aria-label={ariaLabel}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Search;
