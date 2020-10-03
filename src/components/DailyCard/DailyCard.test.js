import React from 'react';
import { renderWithProviders } from '../../utils/test-utils';
import DailyCard from './DailyCard';

test('renders correspond input value', () => {
  const EVENT_LIST = [
    {
      id: 'event_1',
      title: 'Watch Movie',
      description: 'A',
      date: '2020-10-03',
      startTime: '21:00',
      endTime: '23:00'
    },
    {
      id: 'event_2',
      title: 'Go to the park',
      description: '...',
      date: '2020-10-10',
      startTime: '12:00',
      endTime: '16:00'
    }
  ];
  const DATE_1 = '2020-10-03';
  const DATE_2 = '2020-05-26';

  const {
    container,
    getByText,
    rerender,
    unmount
  } = renderWithProviders(<DailyCard date={DATE_1} events={EVENT_LIST} />);

  expect(container.querySelector('.eventCard').childNodes.length).toEqual(2);
  expect(container.querySelector('.date').textContent).toEqual(DATE_1);
  expect(getByText(EVENT_LIST[0].title)).toBeInTheDocument();
  expect(getByText(EVENT_LIST[1].title)).toBeInTheDocument();

  unmount();

  rerender(<DailyCard date={DATE_2} events={[]} />);
  expect(container.querySelector('.eventCard').childNodes.length).toEqual(0);
  expect(container.querySelector('.date').textContent).toEqual(DATE_2);

  unmount();
});
