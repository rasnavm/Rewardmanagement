import { render, screen } from '@testing-library/react';
import Table from './Table';

test('renders learn react link', () => {
  const data = [];
  render(<Table data={data} />);
  const tableHeader = screen.getByText('Transactions');
  expect(tableHeader).toBeInTheDocument();
});
