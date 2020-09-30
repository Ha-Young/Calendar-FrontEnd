import { connect } from 'react-redux';
import Details from '../components/Details/Details';

const mapStateToProps = state => {
  return {
    detailsState: state.details.detailsState,
  };
};

export default connect(mapStateToProps, null)(Details);