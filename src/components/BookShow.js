import React, { useState } from 'react';
import { Item, Button, Input, Form } from 'semantic-ui-react';

export default function BookShow({ id, title, onEdit, onDel }) {
  const [inputVal, setInputVal] = useState('');
  const [editOpen, setEditOpen] = useState(false);
  return (
    <Item>
      <Item.Image size='tiny' src='https://duckmath.org/assets/img/scaled_goose_pixel.png' />
      <Item.Content>
        <Item.Header>{title}</Item.Header>
        <Button
          icon='edit'
          onClick={() => {
            setEditOpen(!editOpen);
          }}
        />
        {editOpen ? (
          <Form
            onSubmit={(event) => {
              event.preventDefault();
              onEdit(id, inputVal);
              setInputVal('');
              setEditOpen(!editOpen);
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
        ) : (
          <></>
        )}

        <Button
          icon='delete'
          onClick={() => {
            // on click takes in a function and passes it event , data.
            onDel(id);
          }}
        />
      </Item.Content>
    </Item>
  );
}
