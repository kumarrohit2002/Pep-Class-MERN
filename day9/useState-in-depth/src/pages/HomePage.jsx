import { useState } from "react";

const HomePage = () => {
    const [arr,setArr]=useState(['Apple','Mango']);
    const handleAddFruit=()=>{
        // arr.push('banana');
        // console.log(arr);
        // setArr(arr);     // it is checking address not value that why not re-render components

        setArr([...arr,'banana']);
    }

  return (
    <div>
        <h1>Home Page</h1>
        <ul>
            {
                arr.map((ele,idx)=>{
                    return(
                        <li key={idx}>{ele}</li>
                    )
                })
            }
        </ul>
         
        <button onClick={handleAddFruit}>Add Fruits</button>
    </div>
  )
}

export default HomePage;