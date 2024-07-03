import React, { useState } from 'react';

const ProgressBar = () => {
  const [on, setOn] = useState(0);
  const [width, setWidth] = useState(1);

  function handleStart() {
    setOn(1);

    function startProgress() {
      let timer = setInterval(() => {
        setWidth((prevWidth) => {
          if (prevWidth >= 100) {
            clearInterval(timer);
            setOn(0);
            return prevWidth;
          }
          return prevWidth + 4;
        });
      }, 400);
    }

    startProgress();
  }

  return (
    <div>
        <h1>Progress Bar</h1>
      <div style={{ width: `${width*2}%`, height: 20, background: 'green', marginBottom: 50, borderRadius: 50 }}></div>
      <button disabled={on} onClick={handleStart}>Start</button>
      <button disabled={on} onClick={() => setWidth(1)}>Reset</button>
    </div>
  );
};

export default ProgressBar;
