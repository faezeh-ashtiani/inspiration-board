import React, { useEffect, useState, useCallback } from 'react';
import './App.css';
import axios from 'axios';
import Board from './components/Board';

const App = () => {
  const [ boardName, setBoardName ] = useState(`tofu-tofu-too-too-too`)
  const [ cardList, setCardList ] = useState([]);
  const [ errorMessage, setErrorMessage ] = useState(null);

  const url = "https://inspiration-board.herokuapp.com/"

  const getCards = useCallback(() => {
    axios.get(`${url}boards/${boardName}/cards`)
    .then((response) => {
      setCardList(response.data);
    }).catch((error) => {
      setErrorMessage(error.response.data.cause); // massage data into better format. build more robust error handling that handles errors at a higher level (i.e., bad url)?
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
  }

  const postCard = (card) => {
    console.log('were in postCard');
    axios.post(`${url}boards/${boardName}/cards`, card)
    .then((/*response*/) => { 
      getCards();
      console.log('were in .then');
    })
    .catch((error) => {
      console.log(error)
      setErrorMessage(error.response.data.cause);
    });
  }
  
  return (
    <section>
      <header className="header">
        <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
      </header>
      <Board
        cardList={cardList}
        onDeleteCardCallBack={deleteCard}
        onPostCardCallback={postCard}
        errorMessage={errorMessage}

        // url="https://inspiration-board.herokuapp.com/"
        // boardName={boardName}
      />
    </section>
  );
};

export default App;
