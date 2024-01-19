export const saveGameStorage = ({ board, turn }) => {
      // Guardamos la partida
      window.localStorage.setItem('board', JSON.stringify(board))
      window.localStorage.setItem('turn', turn)
}

export const resetGameStorage = () => {
      // Borramos la partida
      window.localStorage.removeItem('board')
      window.localStorage.removeItem('turn')
}