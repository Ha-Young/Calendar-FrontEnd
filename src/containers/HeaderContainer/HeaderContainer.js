import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './HeaderContainer.module.css';

import { swapCalendarViewMode } from '../../actions/index';

// TODO: Create your own header.
function HeaderContainer({ onChange, dateInfo }) {
  function handleChange({ target }) {
    if (target.value === 'Week') {
      return onChange(true);
    }
    onChange(false);
  }

  return (
    <header className={styles.Header}>
      <nav>
        <div>
          <Link
            to='/event/new'
            className={styles.addButton}
          >
            New event
          </Link>
        </div>
        <div>Calendar</div>
        <div>
          <select
            name='weekly-select'
            id='weekly-select'
            onChange={handleChange}
            defaultValue={dateInfo.isWeeklyMode ? 'Week' : 'day'}
          >
            <option value='day'>Day</option>
            <option value='Week'>Week</option>
          </select>
        </div>
      </nav>
    </header>
  );
}

const mapStateToProps = (state) => {
  return {
    dateInfo: state.dateInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange(value) {
      dispatch(swapCalendarViewMode(value));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
