import React, { Component, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = ({ url, boardName }) => {
  // iterate over card_data, grab each object, pass into card component
  // TODO: Add key to card
  const cardsList = CARD_DATA.cards.map(card =>
    <Card 
      text={card.text}
      emojiText={card.emoji}
      // url={url} 
      // boardName={boardName} 
    />
  );

  
 // look into setResult and setError
 // should we assign response to a variable and then iterate it outside of axios?
 // does board need state?
 // ADD ID TO PROPS, DAWGS!!!!
  useEffect( () =>{
    axios.get(`${url}+${boardName}/cards`)
    .then((response) => {
      response.map(card => 
        <Card
          text={card.card.text}
          emojiText={card.card.emoji}
          id={card.card.id}
          />
      )
    }).catch((error) => {
      console.log(error.cause);
    }
    )
  } , []
     
  )

  return (
    <div>
      <div className="board">
        {cardsList}
      </div>
        
    </div>
  )
};
Board.propTypes = {

};

export default Board;
