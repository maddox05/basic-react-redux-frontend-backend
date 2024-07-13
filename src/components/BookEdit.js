import React, { useState } from 'react';
import { Segment, Button, Form, Input } from 'semantic-ui-react';

export default function BookEdit({ id, title, onSubmit }) {
  const [inputVal, setInputVal] = useState(title);

  return (
    <>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit(id, inputVal);
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
