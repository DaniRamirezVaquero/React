/* eslint-disable no-unused-vars */
import { useState } from 'react';
import confetti from 'canvas-confetti';

import { Square } from './components/Square';
import { TURNS } from './constants';
import { checkWinnerFrom, checkEndGame } from './logic/board.js';
import { WinnerModal } from './components/WinnerModal';
import { saveGameStorage, resetGameStorage } from './logic/storage/index.js';


function App() {
  const [board, setBoard] = useState( () => {
    const boardFromStorage = window.localStorage.getItem('board')
    // Si no hay nada en el localStorage, devolvemos un array de 9 posiciones con null
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null) 
  })

  const [turn, setTurn] = useState( () => {
    const turnFromStorage = window.localStorage.getItem('turn')
    // Si no hay nada en el localStorage, devolvemos X
    return turnFromStorage ?? TURNS.X
  })

   // null es que no hay ganador, false es que hay empate
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
  }

  const updateBoard = (index) => {

    // Si la casilla ya está ocupada o si ya hay ganador, no hacemos nada 
    if (board[index] || winner) return

    // Si no, actualizamos el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Y cambiamos el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // Guardamos el tablero y el turno en el localStorage
    saveGameStorage(
      {
        board: newBoard,
        turn: newTurn
      }
    )

    // Comprobamos si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <button onClick={resetGame}>Empezar de nuevo</button>

      <WinnerModal winner={winner} resetGame={resetGame}/>
    </main>
  )
}

export default App