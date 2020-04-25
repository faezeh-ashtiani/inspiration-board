import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Card from './Card'; 

describe('Card', () => {
  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = render(
      <Card
        text={"Hello!!"}
        emojiText={"heart_eyes"}
        id={1337}
        key={1337}
        onDeleteCallback={() => {}}
      />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});