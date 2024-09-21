import { render, screen } from '@testing-library/react';
import App from './App';
import StoreContextProvider from './context/StoreContext';

test('renders learn react link', () => {
  render(
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
