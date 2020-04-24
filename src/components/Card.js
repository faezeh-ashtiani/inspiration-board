import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

// DELETE https://inspiration-board.herokuapp.com/cards/:card_id

// add button to card component to DELETE a card
// make an API call, send the url + card ID

const Card = ({ text, emojiText, id, onDeleteCallback }) => {
  // if there is text for emoji, we'll run getUnicode, otherwise we'll return ""

  const emojiSymbol = (emojiText) => {
    if (emojiText) {
      return emoji.getUnicode(emojiText);
    } else {
      return "";
    }
  }

  // the underscore before the event tels linter to ignore the variable
  const deleteCard = (_event) => onDeleteCallback(id);
  
  return (
    <div className="card"> 
      <div className="card__content">
        <div className="card__content-text">{text}</div>
        <div className="card__content-emoji">{emojiSymbol(emojiText)}</div>
      </div>
      <button className="card__delete" onClick={deleteCard}>X</button>
    </div>
  )
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string, // TODO - is this really a string?
  id: PropTypes.number,
  onDeleteCallback: PropTypes.func
};

export default Card;
