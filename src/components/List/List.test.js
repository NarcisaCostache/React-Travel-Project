import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import List from './List'; // Adjust the import path if necessary

test('displays loading indicator when loading', () => {
    render(<List places={[]} isLoading={true} />);
    const loadingIndicator = screen.getByRole('progressbar');
    expect(loadingIndicator).toBeInTheDocument();
  });
  
  test('renders type and rating dropdowns', () => {
    render(<List places={[]} isLoading={false} type="" setType={() => {}} rating="" setRating={() => {}} />);
  
    expect(screen.getByText('Type')).toBeInTheDocument();
    expect(screen.getByText('Rating')).toBeInTheDocument();
  });
  