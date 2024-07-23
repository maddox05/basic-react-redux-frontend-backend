import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';
import { createBook } from '../actions.js';

function BookCreate({ createBook }) {
  const [inputVal, setInputVal] = useState('');
  return (
    <div>
      <Form
        onSubmit={(event, data) => {
          event.preventDefault();
          createBook(inputVal);
          setInputVal('');
        }}
      >
        <label>Add Book</label>
        <input placeholder='Title' value={inputVal} onChange={(event) => setInputVal(event.target.value)} />
      </Form>
    </div>
  );
}

export default connect(null, { createBook })(BookCreate);
