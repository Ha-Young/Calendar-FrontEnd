import moment from 'moment';

import {
  combineDate,
  destructDate,
  calculateNewDate,
  getWeekData,
  reduceSnapshot,
  validateEventForm,
} from '../utils/utilFunction';
import mockingFirebaseData from '../__mock__/index.json';
import {
  NONE_TITLE_MESSAGE,
  INVALID_TIME_MESSAGE,
} from '../constants';



describe('Util function test', () => {
  const testMomentDate = moment('20200101');
  const testStringDate = '20200101';
  const testObjDate = {
    year: '2020',
    month: '01',
    date: '01',
  };

  test('combineDate', () => {
    expect(combineDate(testObjDate)).toEqual(testStringDate);
  });

  test('destructDate', () => {
    expect(destructDate(testMomentDate)).toEqual(testObjDate);
  });

  test('calculateNewDate', () => {
    const nextDate = {
      year: '2020',
      month: '01',
      date: '02',
    };

    expect(destructDate(calculateNewDate(testObjDate, 1))).toEqual(nextDate);
  });

  test('getWeekData', () => {
    const before3Days = {year: '2019', month: '12', date: '29'}
    const before2Days = {year: '2019', month: '12', date: '30'}
    const beforeDay = {year: '2019', month: '12', date: '31'}
    const afterDay = {year: '2020', month: '01', date: '02'}
    const after2Days = {year: '2020', month: '01', date: '03'}
    const after3Days = {year: '2020', month: '01', date: '04'}

    const weekData = [
      before3Days,
      before2Days,
      beforeDay,
      testObjDate,
      afterDay,
      after2Days,
      after3Days
    ];

    expect(getWeekData(testObjDate)).toEqual(weekData);
  });

  test('reduceSnapshot', () => {
    const snapshot = mockingFirebaseData.calendar.userId.testUserId.events;
    const nomalized = {
      events: ['XkrhgHtr7pRs', 's9pJlxKMVbqm', 'tuO26eRMuNU4'],
      eventsId: {
        XkrhgHtr7pRs: snapshot.XkrhgHtr7pRs,
        s9pJlxKMVbqm: snapshot.s9pJlxKMVbqm,
        tuO26eRMuNU4: snapshot.tuO26eRMuNU4,
      },
      date: {
        '': ['XkrhgHtr7pRs'],
        '2020-10-01': ["s9pJlxKMVbqm", "tuO26eRMuNU4"],
      },
    }

    expect(reduceSnapshot(snapshot)).toEqual(nomalized);
  });

  test('validateEventForm', () => {
    const noneTitleTestForm = {
      title: '',
      startTime: 2,
      endTime: 3,
    };

    expect(validateEventForm(noneTitleTestForm)).toEqual(NONE_TITLE_MESSAGE);

    const invalidTimeTestForm = {
      title: 'test',
      startTime: 4,
      endTime: 3,
    };

    expect(validateEventForm(invalidTimeTestForm)).toEqual(INVALID_TIME_MESSAGE);
  })
});
