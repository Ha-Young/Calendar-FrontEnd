import React from 'react';
import styles from './Button.module.css';
import { connect } from 'react-redux';
import { gotoNext, gotoPrev } from '../../actions'

function Button( children ) {

  return (
    <div className={styles.ButtonBox}>
      <button className={styles.Button} onClick={children.gotoPrev}> {'<'} </button>
      <button className={styles.Button} onClick={children.gotoNext}> {'>'} </button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    updateDateReducer: state.updateDateReducer
  };
};

const mapDispatchToProps = dispatch => {

  return {
    gotoNext: () => dispatch(gotoNext()),
    gotoPrev: () => dispatch(gotoPrev()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
