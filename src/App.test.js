import { render, screen, act } from '@testing-library/react';
import App from './App';

test('renders Aqua Plus RO Tech branding', async () => {
  await act(async () => {
    render(<App />);
  });
  const brandingElements = await screen.findAllByText(/Aqua Plus RO Tech/i);
  expect(brandingElements.length).toBeGreaterThan(0);
});
