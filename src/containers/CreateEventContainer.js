import { connect } from 'react-redux';
import CreateEvent from '../components/Event/CreateEvent';

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: function (e) {
      e.preventDefault();
      const actionType = e.target.eventChange.value;
      const eventInfo = {
        id: {
          mainId: e.target.eventStart.value.toString().substring(6,8),
          subId: e.target.eventStart.value,
          title: e.target.title.value,
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
  };
};

export default connect(null, mapDispatchToProps)(CreateEvent);
