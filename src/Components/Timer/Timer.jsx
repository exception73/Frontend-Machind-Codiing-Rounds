import { useState } from 'react';

function Timer() {
  const [minutes, setMinutes] = useState(0);
  const [sec, setSec] = useState(0);
  const [hours, setHours] = useState(0);
  const [laps, setLaps] = useState([]);
  const [on, setOn] = useState(0);
  const [timer, setTimer] = useState(null);

  const handlePause = () => {
    if (on) {
      setOn(0);
      clearInterval(timer);
    }
  };

  const handleRestart = () => {
    setMinutes(0);
    setHours(0);
    setLaps([]);
    setSec(0);
    setOn(0);
    clearInterval(timer);
    setTimer(null);
  };

  const handlePlay = () => {
    if (!on) {
      let time =  setInterval(() => { 
      
      setSec(sec => {
        if(sec == 59){
          setMinutes(minutes => {
            if(minutes == 59){
              setHours(hours => hours+1);
              return 0;
            }return minutes+1;
          })
          return 0;
        } 
        return sec+1;
      })

    }, 1)




    setOn(1);
    setTimer(time);
  }
  };

  const handleLap = () => {
    let time = `${hours} : ${minutes} : ${sec}`;
    setLaps([...laps, time]);
  };


  return (
    <div>
      <div>
        <button onClick={handleRestart}>Restart</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handleLap}>Lap</button>
      </div>
      <div>
        <p>{hours} : {minutes} : {sec}</p>
      </div>
      <ul>
      {laps.map((val, ind) => (
        <li key={ind}>{val}</li>
      ))}
      </ul>
    </div>
  );
}

export default Timer;
