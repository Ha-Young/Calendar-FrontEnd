import React from 'react';
import styled from 'styled-components';
import ScheduleList from '../components/Schedule/ScheduleList';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  eventInfo: state.events.handleEvent,
});

export default connect(mapStateToProps, null)(ScheduleList);