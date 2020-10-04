import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ROUTERS } from '../../router';
import { connect } from 'react-redux';
import styles from './HeaderContainer.module.css';

import { VIEW } from '../../constants/viewMode';
import { swapCalendarViewMode } from '../../actions/index';

function HeaderContainer({ onChange, dateInfo }) {
  const handleViewModeChange = useCallback(function ({ target }) {
    if (target.value === VIEW.WEEKLY_MODE) {
      return onChange(VIEW.WEEKLY_MODE);
    }
    onChange(VIEW.DAILY_MODE);
  }, [onChange]);

  return (
    <header className={styles.Header}>
      <nav>
        <div>
          <Link
            to={ROUTERS.EVENT_NEW}
            className={styles.addButton}
          >
            New event
          </Link>
        </div>
        <div>Calendar</div>
        <div>
          <select
            name='view-select'
            id='view-select'
            onChange={handleViewModeChange}
            defaultValue={dateInfo.viewMode === VIEW.WEEKLY_MODE ? VIEW.WEEKLY_MODE : VIEW.DAILY_MODE}
          >
            <option value={VIEW.DAILY_MODE}>Daily</option>
            <option value={VIEW.WEEKLY_MODE}>Weekly</option>
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

HeaderContainer.propTypes = {
  onChange: PropTypes.func.isRequired,
  dataInfo: PropTypes.shape({
    dayStringify: PropTypes.string.isRequired,
    current: PropTypes.string.isRequired,
    selectedDay: PropTypes.string.isRequired,
    weekList: PropTypes.array.isRequired,
    viewMode: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired
  })
};
