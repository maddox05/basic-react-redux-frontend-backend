import React from 'react';
import { connect } from 'react-redux';
import { Button, Message } from 'semantic-ui-react';

import { hideFlashMessage } from './actions.js';
import FlashMessage from '../FlashMessage.js';

function FlashError({ error, errorMsg, show, hideFlashMessage }) {
  return <FlashMessage msg={errorMsg} errorMsg={error} show={show} hideMessage={hideFlashMessage} />;
}

function mapStateToProps(state) {
  return {
    error: state.errorHandler.error,
    errorMsg: state.errorHandler.errorMsg,
    show: state.errorHandler.show,
  };
}

export default connect(mapStateToProps, { hideFlashMessage })(FlashError);
