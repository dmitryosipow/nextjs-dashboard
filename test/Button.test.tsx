import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

test('renders the button with the correct label', () => {
  render(<Button label="Click Me" />);
  expect(screen.getByText('Click Me1')).toBeInTheDocument();
});