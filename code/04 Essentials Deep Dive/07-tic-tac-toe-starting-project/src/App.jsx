import React from 'react';
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './winning-combinations';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function dericeActivePlayer(gameTurns) {
  let currentPlayer = 'X';
    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
      currentPlayer = 'O';
    }

    return currentPlayer;
}

function App() {

  const [ gameTurns, setGameTurns] = React.useState([]);
  // const [ haswinner, setHasWinner ] = React.useState(false);
  // const [ activePlayer, setActivePlayer ] = React.useState('X');

  const activePlayer = dericeActivePlayer(gameTurns);

  let gameBoard = initialGameBoard;

  for (const turn of gameTurns) {
    const {square, player} = turn;
    const {row, col} = square;
    gameBoard[row][col] = player;

  }

  for (const conbinations of WINNING_COMBINATIONS) {
    const firstSquareSymbol
    const secondSquareSymbol
    const thirdSquareSymbol
  }

  function handleSelectedSquare(rowIndex, cellIndex) {
    // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns(prevTurns => {

      const currentPlayer = dericeActivePlayer(prevTurns);
      // let currentPlayer = 'X';
      // if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
      //   currentPlayer = 'O';
      // }
      const newTurns = [
        {square: {row:rowIndex , col:cellIndex}, player: currentPlayer}, ...prevTurns ];
      return newTurns;
    })
  }

  return <main>
    <div id="game-container">
      <ol id="players" className='highlight-player'>
        <Player initialName="Player 1" symbol="X"  isActive={activePlayer ==='X'} />
        <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
      </ol>
      <GameBoard onSelectSquare={handleSelectedSquare} board ={gameBoard}/>
    </div>
    <Log turns={gameTurns}/>
  </main>;
}

export default App
