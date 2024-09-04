import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Segment, Button, Form, Input } from 'semantic-ui-react';
import { updateBookById } from '../actions.js';

function BookEdit({ id, title, updateBookById, onSubmit }) {
  const [inputVal, setInputVal] = useState(title);

  return (
    <>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit();
          updateBookById(id, inputVal);
          setInputVal('');
        }}
      >
        <Button icon='check' />
        <Input
          value={inputVal}
          onChange={(event, data) => {
            setInputVal(event.target.value);
          }}
        />
      </Form>
    </>
  );
}

export default connect(null, { updateBookById })(BookEdit);
