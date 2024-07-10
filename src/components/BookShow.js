import React, { useState } from 'react';
import { Item, Button, Input } from 'semantic-ui-react';

export default function BookShow({ id, title, onEdit, onDel }) {
  const [inputVal, setInputVal] = useState('');
  return (
    <Item>
      <Item.Image size='tiny' src='https://duckmath.org/assets/img/scaled_goose_pixel.png' />
      <Item.Content>
        <Item.Header>{title}</Item.Header>
        <Button icon='edit' />
        <Button
          icon='check'
          onClick={() => {
            onEdit(id, inputVal);
          }}
        />
        <Input
          value={inputVal}
          onChange={(event, data) => {
            setInputVal(event.target.value);
          }}
        />
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
