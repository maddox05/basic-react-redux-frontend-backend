import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';
/**
 *
 * @prop {function} handleSubmit handles the onSubmit for the searchbar
 * @returns {React.JSX} jsx code
 */
export default function SearchBar({ onSubmit: handleSubmit }) {
  const [searchVal, setSearchVal] = useState('');

  function handleSearchBarChange(event) {
    setSearchVal(event.target.value);
  }
  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(searchVal);
      }}
    >
      <label>Enter Search Term</label>
      <Form.Input placeholder='press enter to search' value={searchVal} onChange={handleSearchBarChange} />
    </Form>
  );
}
