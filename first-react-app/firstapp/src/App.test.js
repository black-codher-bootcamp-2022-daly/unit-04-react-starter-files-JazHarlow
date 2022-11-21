import { render, screen } from '@testing-library/react';
import { App, Header, } from './App';
import { NavBar } from './NavBar';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders the header', () => {
  render(<Header name="Jaz" color="blue" fruit="passionfruit"/>);
  const name = screen.getByText(/Jaz/i);
  const color = screen.getByText(/blue/i);
  // const fruit = screen.getByText(/blueberry/i);
  expect(name).toBeInTheDocument();
  expect(color).toBeInTheDocument();
  // expect(fruit).toBeInTheDocument();
});


test('renders the navbar', () => {
  render(<NavBar>
    <ul>
      <li> SuperLink 1</li>
      <li> SuperLink 2</li>
    </ul>
  </NavBar>);
    const result = screen.getByText(/SuperLink 1/)
    expect(result).toBeInTheDocument()
});




