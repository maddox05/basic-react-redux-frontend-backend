import React from 'react';
import { connect } from 'react-redux';
import { Button, Message } from 'semantic-ui-react';
import { hideFlashMessage } from './actions.js';

function FlashMessage({ msg, error = null, show, hideFlashMessage }) {
  return (
    <>
      {show ? (
        <Message floating error={Boolean(error)} success={!Boolean(error)}>
          <Button
            icon='x'
            onClick={() => {
              hideFlashMessage();
            }}
          />
          <Message.Header>{error ? 'An Error has Occured.' : 'Success!'}</Message.Header>
          <p>
            {msg}: {error?.toString()}
          </p>
        </Message>
      ) : (
        <></>
      )}
    </>
  );
}

function mapStateToProps(state) {
  return { msg: state.flashMessage.msg, error: state.flashMessage.error, show: state.flashMessage.show };
}

export default connect(mapStateToProps, { hideFlashMessage })(FlashMessage);
