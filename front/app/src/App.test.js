import { render, screen } from '@testing-library/react';
import App from './App';
import TextExample from './componentes/publicacion';

test('renders learn react link', () => {
  render(
  
  <>
    <TextExample />
    <App />
  </>

);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
