import React from 'react'
import { useState } from 'react'
import './InputForm.css'

const InputForm = () => {

    const [userDetails,setUserDetails]=useState([]);
    const [isUpdate,setIsUpdate]=useState(true)

    const handelOnSubmit=(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const city=e.target.city.value;
        const obj={name:name,city:city};
        setUserDetails([...userDetails,obj]);
    }

    const handleDelete=(index)=>{
        const arr=userDetails;
        arr.splice(index,1);
        setUserDetails([...arr])
    }

    const handleUpdate=(idx,name,city)=>{

    }


  return (
    <div>
        <form onSubmit={handelOnSubmit}>
            <input type="text" placeholder='Enter Name' name='name' required/>
            <br />
            <input type="text" placeholder='Enter City' name='city' required/>
            <button type='submit'>Add User Details</button>
        </form>

        <div className='card-container'>
           { 
            userDetails.length>0?(
            userDetails.map((e,idx)=>{
                return(
                    <div key={idx} className='card'>
                        <p>{idx+1}. Name: {e.name}</p>
                        <p>City: {e.city}</p>
                        <button onClick={()=>{handleDelete(idx)}} >Delete</button>
                        {
                            isUpdate?<button onClick={()=>{setIsUpdate(false) }} >Update</button>:
                            <form onSubmit={handleUpdate}>
                                <input type="text" placeholder='Enter Name' name='name' required/>
                                <br />
                                <input type="text" placeholder='Enter City' name='city' required/>
                                <button type='submit'>Save</button>
                            </form>
                        }

                    </div>
                )
            })

            ):(<div></div>)
           }
        </div>
    </div>
  )
}

export default InputForm