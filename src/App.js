import React, {useState} from 'react';
import './App.css';
import Board from './components/Board';

const App = () => {
  const [boardName, setBoardName] = useState(`tofu-tofu-too-too-too`);

  return (
    <section>
      <header className="header">
        <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
      </header>
      <Board
        url="https://inspiration-board.herokuapp.com/"
        boardName={boardName}
      />
    </section>
  );
};

export default App;
