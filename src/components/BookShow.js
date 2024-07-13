import React, { useState } from 'react';
import { Item, Button, Input, Form, Segment } from 'semantic-ui-react';
import BookEdit from './BookEdit.js';

export default function BookShow({ id, title, onEdit, onDel }) {
  const [showEdit, setShowEdit] = useState(false);

  function handleEditClick(id, newTitle) {
    onEdit(id, newTitle);
    setShowEdit(!showEdit);
  }

  return (
    <Segment>
      <Item>
        <Item.Image alt='book' size='tiny' src={`https://picsum.photos/seed/${id}/300/200`} />
        <Item.Content>
          <Item.Header>
            {showEdit ? ( // only show edit when edit button clicked
              <>
                Title:
                <BookEdit title={title} id={id} onSubmit={handleEditClick} />
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
    </Segment>
  );
}
