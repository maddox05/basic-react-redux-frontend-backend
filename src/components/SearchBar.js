import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';
/**
 *
 * @prop {function} handleSubmit handles the onSubmit for the searchbar
 * @returns {React.JSX} jsx code
 */
export default function SearchBar({ handleSubmit }) {
  const [searchVal, setSearch] = useState('');

  function handleSearchBarChange(event) {
    setSearch(event.target.value);
  }
  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(event.target[0].value);
      }}
    >
      <Form.Input placeholder='press enter to search' value={searchVal} onInput={handleSearchBarChange} />
    </Form>
  );
}
