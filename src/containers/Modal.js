import Modal from '../components/Modal/Modal';
import { connect } from 'react-redux';
import { addsubmitdata } from '../Redux/action';

const mapStateToProps  = (state) => ({
  datesInfo: state.byDate
});

export default connect(mapStateToProps, { addsubmitdata })(Modal);
