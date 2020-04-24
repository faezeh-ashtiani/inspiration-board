import React, {useState} from 'react';
import './App.css';
import Board from './components/Board';

const App = () => {
  const [boardName, setBoardName] = useState(`Ada-Lovelace`)

  
  return (
    <section>
      <header className="header">
        <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
      </header>
      <Board
        url="https://inspiration-board.herokuapp.com/boards/"
        boardName={boardName}
      />
    </section>
  );
};

export default App;
