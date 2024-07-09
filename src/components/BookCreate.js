import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';

export default function BookCreate({ onCreateBook }) {
  const [inputVal, setInputVal] = useState('');
  return (
    <div>
      <Form
        onSubmit={(event, data) => {
          event.preventDefault();
          onCreateBook(inputVal);
          setInputVal('');
        }}
      >
        <label>Add Book</label>
        <input placeholder='Title' value={inputVal} onChange={(event) => setInputVal(event.target.value)} />
      </Form>
    </div>
  );
}
