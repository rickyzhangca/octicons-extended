import React from 'react';
import AutosizeInput from 'react-input-autosize';
import { SearchIcon } from 'octicons-extended-react';
import { Container } from './search.styles';

const Search = ({ autoFocus, value, placeholder, onChange, ariaLabel }) => {
  return (
    <Container>
      {/* any ways to access tailwind styling in jsx? */}
      <SearchIcon fill={'#9BA3AE'} />
      <AutosizeInput
        autoFocus={autoFocus}
        aria-label={ariaLabel}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Container>
  );
};

export default Search;
