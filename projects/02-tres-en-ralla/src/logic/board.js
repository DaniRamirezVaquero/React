// Comprobamos si hay ganador
import { WINNER_COMBOS } from '../constants.js'

export const checkWinnerFrom = (boardtoCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (
      boardtoCheck[a] && // Comprobamos si hay algo en la casilla
      boardtoCheck[a] === boardtoCheck[b] &&  // Comprobamos si las tres casillas son iguales
      boardtoCheck[a] === boardtoCheck[c]     // Comprobamos si las tres casillas son iguales
    ) {
      return boardtoCheck[a] // Devolvemos el ganador (X o O)
    }
  }
  // Si no hay ganador ni empate, devolvemos null
  return null
}

export const checkEndGame = (newBoard) => {
  // revisamos si hay un empate
  // si no hay más espacios vacíos
  // en el tablero
  return newBoard.every((square) => square !== null)
}