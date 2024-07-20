import React from 'react';
import { Button, Message } from 'semantic-ui-react';

export default function FlashMessage({ error, message, show, hideMessage, color }) {
  return (
    <>
      {show ? (
        <Message floating color={color}>
          <Button
            icon='x'
            onClick={() => {
              hideMessage();
            }}
          />
          <Message.Header>{error ? 'An Error has Occured.' : 'Success!'}</Message.Header>
          <p>
            {message}: {error?.toString()}
          </p>
        </Message>
      ) : (
        <></>
      )}
    </>
  );
}
