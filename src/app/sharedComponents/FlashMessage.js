import React from 'react';
import { Button, Message } from 'semantic-ui-react';

export default function FlashMessage({ errorMsg = null, msg, show, hideMessage }) {
  return (
    <>
      {show ? (
        <Message floating error={errorMsg} success={!errorMsg}>
          <Button
            icon='x'
            onClick={() => {
              hideMessage();
            }}
          />
          <Message.Header>{errorMsg ? 'An Error has Occured.' : 'Success!'}</Message.Header>
          <p>
            {msg}: {errorMsg}
          </p>
        </Message>
      ) : (
        <></>
      )}
    </>
  );
}
