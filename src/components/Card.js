import React from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = ({ text, emojiText, id, onDeleteCallback }) => {

  const emojiSymbol = (input) => {
    return (input) ? emoji.getUnicode(input) : ""; // if an emoji was not selected, the input it will not be converted via emoji dictionary
  };

  const deleteCard = (_event) => onDeleteCallback(id); // the underscore before the event tells linter to ignore the variable

  const randomItem = (items) => {
    return items[Math.floor(Math.random()*items.length)];
  };

  const randomColor = () => {
    const colors =['yellow', 'pink', 'blue', 'green'];
    const colorClass = randomItem(colors);
    return `card ${colorClass}`;
  };
  
  return (
    <div className={randomColor()}> 
      <div className="card__content">
        <div className="card__content-text">{text}</div>
        <div className="card__content-emoji">{emojiSymbol(emojiText)}</div>
      </div>
      <button className="card__delete" onClick={deleteCard}>X</button>
    </div>
  );
};

Card.propTypes = {
  text: PropTypes.string,
  emojiText: PropTypes.string,
  id: PropTypes.number,
  onDeleteCallback: PropTypes.func.isRequired
};

export default Card;
