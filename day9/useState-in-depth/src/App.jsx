import React, { useState } from 'react'
import HomePage from './pages/HomePage';

const App = () => {
  const [moniter,remote]=useState(()=>{
                                      let val=localStorage.getItem('counter-val');
                                      val=parseInt(val);

                                      return val?val:0;
                                    });


  const handleIncrement=(e)=>{
    remote((prev)=>{
      const newVal=prev+1;
      localStorage.setItem('counter-val',newVal);
      return newVal;
    })
  }
  const handleDecrement=(e)=>{
    remote((prev)=>{
      const newVal=prev-1;
      if(newVal<0) return 0;
      localStorage.setItem('counter-val',newVal);
      return newVal;
    })
  }
  const handleRest=(e)=>{
    remote(0);
    localStorage.setItem('counter-val',0);
  }

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleRest}>Reset</button>
      <h2>{moniter}</h2>

      <h1>----------------------------------------------</h1>
      <HomePage/>
    </div>
  )
}

export default App;