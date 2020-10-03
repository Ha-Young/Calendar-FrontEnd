import React from 'react';
import { renderWithProviders } from '../../utils/test-utils';
import App from './App';

test('renders initial loading page', () => {
  const { getByText, unmount } = renderWithProviders(<App />);
  expect(getByText(/is loading.../i)).toBeInTheDocument();

  unmount();
});
