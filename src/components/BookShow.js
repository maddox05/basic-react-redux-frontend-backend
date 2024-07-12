import React, { useState } from 'react';
import { Item, Button, Input, Form, Segment } from 'semantic-ui-react';
import BookEdit from './BookEdit.js';

export default function BookShow({ id, title, onEdit, onDel }) {
  console.log(title);
  const [showEdit, setShowEdit] = useState(false);

  function handleEditClick() {
    setShowEdit(!showEdit);
  }

  return (
    <Item>
      <Item.Image size='tiny' src='https://duckmath.org/assets/img/scaled_goose_pixel.png' />
      <Item.Content>
        <Item.Header>
          {showEdit ? (
            <>
              Title:
              <BookEdit title={title} id={id} changeShow={handleEditClick} onEdit={onEdit} />
            </>
          ) : (
            <>{title}</>
          )}
        </Item.Header>
        <Button
          icon='edit'
          onClick={() => {
            setShowEdit(!showEdit);
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
