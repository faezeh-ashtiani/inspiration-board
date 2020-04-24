import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = ({ url, boardName }) => {
  // iterate over card_data, grab each object, pass into card component
  // TODO: Add key to card

  const [ cardList, setCardList ] = useState([]);
  const [ errorMessage, setErrorMessage ] = useState(null);

  useEffect( () => {
    axios.get(`${url}${boardName}/cards`)
    .then((response) => {
      setCardList(response.data);
    }).catch((error) => {
      setErrorMessage(error.cause);
    })
  }, [ url, boardName ]);

  // put this into a separate helper function that we can call inline when we render
  // can massage the data into a more friendly format like card.text
  const cards = cardList.map(card => 
    <Card
      text={card.card.text}
      emojiText={card.card.emoji}
      key={card.card.id}
    />
  );

  return (
    <div>
      <div className="board">
        {cards}
      </div>
        
    </div>
  )
};
Board.propTypes = {

};

export default Board;
