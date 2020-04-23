import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = ({ url, boardName }) => {
  // iterate over card_data, grab each object, pass into card component
  const cardsList = CARD_DATA.cards.map(card =>
    <Card 
      text={card.text}
      emoji={card.emoji}
      // url={url} 
      // boardName={boardName} 
    />
  );

  return (
    <div>
      <div className="board">
        Board
      </div>
        {cardsList}
    </div>
  )
};
Board.propTypes = {

};

export default Board;
