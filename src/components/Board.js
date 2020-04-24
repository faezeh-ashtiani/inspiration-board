import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

const Board = ({ url, boardName }) => {
  // TODO: add helper functions? think about the big picture before we get down to the nitty gritty

  const [ cardList, setCardList ] = useState([]);
  const [ errorMessage, setErrorMessage ] = useState(null);

  // introduce helper function so this can be called on each data update
  useEffect( () => {
    axios.get(`${url}${boardName}/cards`)
    .then((response) => {
      setCardList(response.data);
    }).catch((error) => {
      setErrorMessage(error.response.data.cause); // massage data into better format. build more robust error handling that handles errors at a higher level (i.e., bad url)?
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
      <div>{errorMessage}</div>
      <div className="board">
        {cards}
      </div>
    </div>
  )
};

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
