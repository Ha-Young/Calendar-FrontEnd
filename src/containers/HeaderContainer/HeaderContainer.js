import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ROUTER } from '../../router';
import { connect } from 'react-redux';
import styles from './HeaderContainer.module.css';

import { swapCalendarViewMode } from '../../actions/index';

// TODO: Create your own header.
function HeaderContainer({ onChange, dateInfo }) {
  const handleChange = useCallback(function ({ target }) {
    if (target.value === 'week') {
      return onChange(true);
    }
    onChange(false);
  }, [onChange]);

  return (
    <header className={styles.Header}>
      <nav>
        <div>
          <Link
            to={ROUTER.EVENT_NEW}
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
            defaultValue={dateInfo.isWeeklyMode ? 'week' : 'day'}
          >
            <option value='day'>Day</option>
            <option value='week'>Week</option>
          </select>
        </div>
      </nav>
    </header>
  );
}

const mapStateToProps = ({ dateInfo }) => ({
  dateInfo
});

const mapDispatchToProps = (dispatch) => {
  return {
    onChange(value) {
      dispatch(swapCalendarViewMode(value));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
