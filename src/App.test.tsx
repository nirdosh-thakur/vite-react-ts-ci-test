import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CI Test Project', () => {
  render(<App />);
  expect(screen.getByText(/CI Test Project/i)).toBeDefined();
});
