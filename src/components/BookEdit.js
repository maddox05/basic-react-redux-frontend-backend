import React, { useState } from 'react';
import { Segment, Button, Form, Input } from 'semantic-ui-react';

export default function BookEdit({ id, title, changeShow, onEdit }) {
  const [inputVal, setInputVal] = useState(title);

  return (
    <>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          onEdit(id, inputVal);
          setInputVal('');
          changeShow();
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
