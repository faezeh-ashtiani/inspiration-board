import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

const Board = ({ url, boardName }) => {

  const [ cardList, setCardList ] = useState([]);
  const [ errorMessage, setErrorMessage ] = useState(null);

  const getCards = useCallback(() => {
    axios.get(`${url}boards/${boardName}/cards`)
    .then((response) => {
      setCardList(response.data);
    })
    .catch((error) => {
      setErrorMessage(error.response.data.cause);
    });
  }, [url, boardName]);

  useEffect( getCards, [ getCards ]);

  const deleteCard = (id) => {
    axios.delete(`${url}cards/${id}`)
    .then((/*response*/) => { 
      getCards();
    })
    .catch((error) => {
      setErrorMessage(error.response.data.cause);
    });
  };

  const postCard = (card) => {
    axios.post(`${url}boards/${boardName}/cards`, card)
    .then((/*response*/) => { 
      getCards();
    })
    .catch((error) => {
      setErrorMessage(error.response.data.cause);
    });
  };

  const cards = cardList.map(card => 
    <Card
      text={card.card.text}
      emojiText={card.card.emoji}
      id={card.card.id}
      key={card.card.id}
      onDeleteCallback={deleteCard}
    />
  );

  return (
    <div>
      <div className="validation-errors-display">
        {errorMessage}
      </div>
      <div className="board">
        <NewCardForm onPostCardCallback={postCard}/>
        {cards}
      </div>
    </div>
  );
};

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
