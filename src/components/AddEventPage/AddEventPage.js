import React, { useState } from 'react';
import styles from './AddEventPage.module.css';
import firebase from '../../utils/firebase';
import fetchData from '../../utils/api';
import { connect } from 'react-redux';
import { addEvent, selectEvent } from '../../actions';
import { time } from '../../constants';

const database = firebase.database();

function AddEventPage(props) {
  
  const today = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
  const [addEventForm, setAddEventForm] = useState({
    title: '',
    date: today,
    startTime: '00',
    endTime: '00',
    description: ''
  });

  function saveData(event) {
    event.preventDefault();
    storeAndRetrieveData(addEventForm);
  }

  async function storeAndRetrieveData(form) {
    const key = Date.now();

    try {
      await database.ref('chalender/event/' + key).set({
        ...form
      });

    } catch (err) {
      throw new Error('error in the middle of saving data to the firebase');
    }

    fetchData()
      .then(response => {
        props.addEvent(response);
      });
  }

  function onChange(event) {
    event.preventDefault();
    const value = event.target.value;

    setAddEventForm({
      ...addEventForm,
      [event.target.name]: value
    });
  }

  const timeOptions = time.map((time, i) => {
    const integer = Math.floor(time);
    let presentHour = integer;

    if ((integer + '').length === 1) {
      presentHour = '0' + integer;
    }

    return (
      i % 2 === 0 ?
        <option key={presentHour + ':00'} value={presentHour + ':00'}>{presentHour}시</option> :
        <option key={presentHour + ':30'} value={presentHour + ':30'}>{presentHour}시 30분</option>
    );
  });

  return (
    <div className={styles.FormBox}>
      <div>
        <form>
          <input className={styles.InputTitle} type='text' placeholder='Title' name='title' value={addEventForm.title} onChange={onChange} />
          <div className={styles.InputDate}> INPUT DATE
            <input className={styles.Date} type='text' name='date' value={addEventForm.date} onChange={onChange} />
          </div>
          <div className={styles.Time}>
            STARTS AT
            <select className={styles.Select} name='startTime' value={addEventForm.startTime} onChange={onChange}>
              {timeOptions}
            </select>
            ~ ENDS AT
            <select className={styles.Select} name='endTime' value={addEventForm.endTime} onChange={onChange}>
              {timeOptions}
            </select>
          </div>
          <textarea className={styles.Textarea} name='description' value={addEventForm.description} onChange={onChange}></textarea>
        </form>
      </div>
      <button className={styles.Button} type="submit" onClick={saveData}>ADD</button>
      <button className={styles.Button}>RESET</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    addEventReducer: state.addEventReducer,
    selectEventReducer: state.selectEventReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addEvent: (form) => dispatch(addEvent(form)),
    selectEvent: () => dispatch(selectEvent()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEventPage);
