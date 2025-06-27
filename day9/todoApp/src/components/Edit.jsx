import React, { useState } from 'react'
const arr=['kiwi','banana','pineapple'];

const Edit = () => {
    const [editIndex,setEditIndex]=useState(-1);

  return (
    <div>
        {
            arr.map((elem,idx)=>{
                return(
                    <div style={{backgroundColor:idx===editIndex?'red':'green'}}>
                        <button onClick={()=>{setEditIndex(idx)}}>Edit</button>
                    </div>
                )
            })
        }
        
    </div>
  )
}

export default Edit