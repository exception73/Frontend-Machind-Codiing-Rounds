import React, {useState, useEffect} from 'react'
import useTicTacToe from '../../hooks/TicTacToe/useTicTacToe.js'


// const TIC_TAC_TOE_SIZE = 4;

// import useTicTacToe
const TicTaeToe = () => {
  const [TIC_TAC_TOE_SIZE, setBoardSize] = useState(3);

  const {board, turn, setTurn, winner, handleClick, handleReset} = useTicTacToe(TIC_TAC_TOE_SIZE);

  const [newsize, setnewsize] = useState(3);

  
  return (
    <div>

      <div style={{marginBottom:30}}>
      <span>Board Size</span><input type="range" onChange={(e) => setBoardSize(e.target.value)}  value={TIC_TAC_TOE_SIZE} min={3} max={9}/> <button onClick={() => {handleReset(TIC_TAC_TOE_SIZE), setnewsize(TIC_TAC_TOE_SIZE)}}>OK</button>

      </div>

      <div style={{display:'flex', alignItems : 'center' , justifyContent:'space-between', marginBottom : 20}}>
      {winner && winner == 'Draw' &&  `Game Draw`}
      {winner && winner != 'Draw' &&  `Player ${winner} Wins`}
      {!winner &&  `Player ${turn} Turn` }
        <button onClick={() => handleReset(TIC_TAC_TOE_SIZE)}>Reset Game</button>
      </div>

      <div style={
        {
          display:"grid",
          gridTemplateColumns: `repeat(${newsize}, 1fr)`
        }
      }> 
        {
          
          board?.map((_,index) => {
            // console.log()
              return <button  disabled={winner ? true : false} key={index} style={{display:'flex', justifyContent:'center', alignItems:'center', height:'70px', width:'70px', margin:'2px'}} onClick={() => handleClick(index)}>{_}</button>
          })
        }
      </div>


    </div>
  )
}

export default TicTaeToe