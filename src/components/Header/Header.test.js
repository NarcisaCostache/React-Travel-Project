import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders Header component', () => {
  render(<Header />);
  const headerElement = screen.getByText('Explore new places');
  expect(headerElement).toBeInTheDocument();
});
