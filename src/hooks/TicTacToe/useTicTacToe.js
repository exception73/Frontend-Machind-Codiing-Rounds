import { useState } from "react";
import generateWinningPatterns from "./GenerateWinningPatterns";

function useTicTacToe(n=3){
    const initialBoard = (size) => Array(size*size).fill(null);
    const [board, setBoard] = useState(initialBoard(n))
    const [turn, setTurn] = useState('X')
    const [winner, setWinner] = useState(null);

    const WINNING = generateWinningPatterns(n)


    const checkWinning = (nb) => {
      
        for (let i = 0; i < WINNING.length; i++) {
          const pattern = WINNING[i];
          const first = nb[pattern[0]];
          if (first && pattern.every(index => nb[index] === first)) {
            return first;
          }
        }
        return null;
      }

    function checkDraw(nb){
        return nb.includes(null)
        
    }


    function handleClick(ind){
        if(board[ind]) return;
        let newboard = [...board];
        newboard[ind] = turn;
        setBoard(newboard);

        if(checkDraw(newboard)){
          if(turn == 'X') setTurn('O');
        else setTurn('X');
        }
        let win = checkWinning(newboard);
        if(win) setWinner(win)
    
       if(!checkDraw(newboard) && winner == null){
        setWinner('Draw')
       }
        
    }

    function handleReset(size){
        // useTicTacToe(size);
        setBoard(initialBoard(size));
        setTurn('X');
        setWinner(null);
    }

        console.log(winner)


    return {board, turn, setTurn, handleClick, winner, handleReset};
}

export default useTicTacToe;