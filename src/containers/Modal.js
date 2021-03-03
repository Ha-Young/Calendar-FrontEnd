import Modal from '../components/Modal/Modal';
import { connect } from 'react-redux';
import {
  addtitle,
  adddescription,
  addstartdate,
  addenddate
} from '../Redux/action';

const mapDispatchToProps = {
  addtitle,
  adddescription,
  addstartdate,
  addenddate
}

export default connect(null, mapDispatchToProps)(Modal);