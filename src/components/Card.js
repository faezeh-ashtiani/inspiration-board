import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = ({ text, emojiText }) => {
  // if there is text for emoji, we'll run getUnicode, otherwise we'll return ""

  const emojiSymbol = (emojiText) => {
    if (emojiText) {
      return emoji.getUnicode(emojiText);
    } else {
      return "";
    }
  }
  
  return (
    <div className="card"> 
      <div className="card__content">
      <div className="card__content-text">{text}</div>
      <div className="card__content-emoji">{emojiSymbol(emojiText)}</div>
      </div>
    </div>
  )
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string // TODO - is this really a string?
};

export default Card;
