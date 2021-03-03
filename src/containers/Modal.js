import Modal from '../components/Modal/Modal';
import { connect } from 'react-redux';
import { addsubmitdata } from '../Redux/action';

export default connect(null, { addsubmitdata })(Modal);
