import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders button and handles click', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  fireEvent.click(screen.getByText('Click me'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('shows loading spinner when loading', () => {
  render(<Button loading>Load</Button>);
  expect(screen.getByText('Load')).toBeInTheDocument();
  const spinner = screen.getByRole('progressbar');
  expect(spinner).toBeInTheDocument();
});

test('disables button when disabled', () => {
  const { getByText } = render(<Button disabled>Disabled</Button>);
  const button = getByText('Disabled');
  expect(button).toHaveAttribute('disabled');
});