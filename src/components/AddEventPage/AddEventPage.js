import React, { useState } from 'react';
import styles from './AddEventPage.module.css';
import firebase from '../../utils/firebase';
import { connect } from 'react-redux';
import { addEvent, selectEvent } from '../../actions'

const database = firebase.database();

function AddEventPage(children) {
  const time = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5,
    5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5,
    10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5,
    15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5, 19, 19.5,
    20, 20.5, 21, 21.5, 22, 22.5, 23, 23.5, 24];

  const [addEventForm, setAddEventForm] = useState({
    title: '',
    date: '2020-10-02',
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

    await database.ref('chalender/event/' + key).set({
      ...form
    });
    
    await database.ref('chalender/event').on('value', gotData, errData);

    async function gotData(data) {
      const allData = data.val();
      children.addEvent(allData);
    }

    function errData(err) {
      throw new Error ('error in the middle of retrieving data');
    }
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
        <option key={time} value={time}>{presentHour}시</option> :
        <option key={time} value={time}>{presentHour}시 30분</option>
    );
  });

  return (
    <div className={styles.FormBox}>
      <div>
        <form>
          <input className={styles.InputTitle} type='text' placeholder='Title' name='title' value={addEventForm.title} onChange={onChange} />
          <div className={styles.InputDate}> INPUT DATE
            <input className={styles.Date}  type='text' name='date' value={addEventForm.date} onChange={onChange} />
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
