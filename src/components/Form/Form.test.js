import React from 'react';
import { fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../../utils/test-utils';
import Form from './Form';

test('works form submit action', () => {
  const CREAT = 'Create';
  const INPUT_VALUE = {
    id: 'event_1234',
    date: '2020-05-26',
    startTime: '00:00',
    endTime: '24:00',
    title: 'BirthDay',
    description: '!!!'
  };
  const result = {};
  const onSubmit = jest.fn((value) => {
    Object.assign(result, value);
  });
  const { getByText, unmount } =
    renderWithProviders(
      <Form
        onSubmit={onSubmit}
        target={INPUT_VALUE}
        text={CREAT}
      />
    );

  expect(Object.values(result)).toEqual([]);

  fireEvent.submit(getByText(CREAT));

  expect(result.id).toEqual(INPUT_VALUE.id);
  expect(result.date).toEqual(INPUT_VALUE.date);
  expect(result.startTime).toEqual(INPUT_VALUE.startTime);
  expect(result.endTime).toEqual(INPUT_VALUE.endTime);
  expect(result.title).toEqual(INPUT_VALUE.title);
  expect(result.description).toEqual(INPUT_VALUE.description);

  unmount();
});
