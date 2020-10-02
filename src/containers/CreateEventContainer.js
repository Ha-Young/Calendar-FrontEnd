import React from 'react';
import { connect } from 'react-redux';
import CreateEvent from '../components/Event/CreateEvent';

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: function (e) {
      e.preventDefault();
      const actionType = e.target.eventChange.value;
      const eventInfo = {
        id: {
          mainId: e.target.eventStart.value.toString().substring(0, 8),
          order: e.target.eventStart.value.toString().substring(8),
        },
        detail: {
          eventTitle: e.target.title.value,
          eventDesc: e.target.desc.value,
          eventStart: e.target.eventStart.value,
          eventEnd: e.target.eventEnd.value,
        }
      };
      dispatch({type: actionType, eventInfo: eventInfo});
    }
  }
}

export default connect(null, mapDispatchToProps)(CreateEvent);

