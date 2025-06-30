import React, { useEffect, useRef, useState } from "react";

const Time = () => {
  const [timeInSec, setTimeSec] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalId = useRef(null);
  const [laps,setLaps]=useState([]);

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
      <h2>00:00:{timeInSec}</h2>
      <button onClick={()=>setIsRunning(!isRunning)}>
        {isRunning ? 'Pause' : 'Play'}
      </button>
      <button onClick={()=>setLaps([...laps,timeInSec])}>lap</button>
      <button onClick={()=>{
        setTimeSec(0);
        setIsRunning(false);
        setLaps([]);
      }}>Rest</button>
      <div>
        {
            laps.map((lap)=>{
                return <div key={lap}>
                    <p>{lap}</p>
                </div>
            })
        }
      </div>
    </div>
  );
};

export default Time;
