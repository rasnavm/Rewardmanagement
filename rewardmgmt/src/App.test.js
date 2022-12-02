import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const tableHeader = screen.getByText('Transactions');
  expect(tableHeader).toBeInTheDocument();
});
