import React from 'react';
import { connect } from 'react-redux';
import FlashMessage from '../FlashMessage.js';
import { hideSuccessMessage } from './actions.js';

function FlashSuccess({ show, msg, hideSuccessMessage }) {
  return <FlashMessage show={show} message={msg} color={'green'} hideMessage={hideSuccessMessage} />;
}

function mapStateToProps(state) {
  return {
    show: state.successHandler.show,
    msg: state.successHandler.msg,
  };
}
export default connect(mapStateToProps, { hideSuccessMessage })(FlashSuccess);
