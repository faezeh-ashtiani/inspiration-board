import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = ({ text, emoji }) => {
  return (
    <div className="card card__content">
      {text}
      {emoji}
    </div>
  )
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string // TODO - is this really a string?
};

export default Card;
