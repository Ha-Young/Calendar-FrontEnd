import Header from '../components/Header/Header';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  thisMonth: state.dates.handleMonthlyDates.title
});

export default connect(mapStateToProps, null)(Header);