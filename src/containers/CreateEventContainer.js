import React from 'react';
import styled from 'styled-components';
import CreateEvent from '../components/Event/CreateEvent';
import { connect } from 'react-redux';

const mapStateToProps = (stat) => {
  return {
    haha: 123
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    testt: function (a) {
      console.log(a);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);