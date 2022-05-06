import './App.css';
import { useState } from 'react';


let board = [
  ['-', '-', '-'],
  ['-', '-', '-'],
  ['-', '-', '-']
]


function App() {
  const [gameBoard, setGameBoard] = useState(board);
  const [player, setPlayer] = useState('X');

  let resetGame = () => {
    console.log('reset game');
    setGameBoard(board)
  }

  let selectCell = (event) => {
    console.log(event);
    let row = event.target.dataset.row;
    let column = event.target.dataset.column;

    if (gameBoard[row][column] === '-') {
      let newBoard = gameBoard.map(function (arr) {
        return arr.slice();
      });
      newBoard[row][column] = player;

      setGameBoard(newBoard);
      setPlayer(player == 'X' ? 'O' : 'X')

    } else {
      alert('Cant move here, Space is taken!')
    }
  }

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <h2>Current Player: {player} </h2>
      {gameBoard.map((row, rowIndex) => {
        return <div>
          {row.map((cell, columnIndex) => {
            return <button
              data-row={rowIndex}
              data-column={columnIndex}
              onClick={selectCell}>{cell}</button>
          })}
        </div>
      })}
      <br />
      <button onClick={resetGame}>New Game</button>
    </div>
  );
}

export default App;
