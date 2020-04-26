import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Card from './Card'; 

describe('Card', () => {
  // NOTE: Because we have a randomly generated className for the card wrapper element (e.g., "card pink", "card yellow", etc.), the snapshot test will fail when comparing line 26 in Card.js. We located a potential solution using asymmetric matchers, and a future refactor could include this. We are actively choosing to fail this snapshot test and accept any ramifications!
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