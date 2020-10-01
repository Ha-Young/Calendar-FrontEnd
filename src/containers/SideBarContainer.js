import SideBar from '../components/Sidebar/SideBar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  thisMonth: state.dates.handleMonthlyDates.thisMonth
});

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);