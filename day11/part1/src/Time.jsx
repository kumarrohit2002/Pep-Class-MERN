import React, { useEffect, useRef, useState } from "react";

const Time = () => {
  const [timeInSec, setTimeSec] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalId = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalId.current = setInterval(() => {
        setTimeSec((prev) => {
          const time = prev + 1;
          console.log(time);
          return time;
        });
      }, 1000);
    }else{
        clearInterval(intervalId.current);
    }
  }, [isRunning]);



  return (
    <div>
      <p>00:00:{timeInSec}</p>
      <button onClick={()=>setIsRunning(!isRunning)}>
        {isRunning ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default Time;
