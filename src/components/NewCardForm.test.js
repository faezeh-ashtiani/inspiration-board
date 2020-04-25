import React from 'react';
import { render, cleanup } from '@testing-library/react'
import NewCardForm from './NewCardForm'; 

describe('NewCardForm', () => {
  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = render(
      <NewCardForm
        onPostCardCallback={() => { }}
      />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});