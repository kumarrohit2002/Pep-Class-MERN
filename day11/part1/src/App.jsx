import React, { useEffect, useState } from "react";
import Time from "./Time";

const App = () => {
  const [userList, setUserList] = useState([]);

  // const response = fetch("https://dummyjson.com/users");

  // response
  //   .then((resp) => {
  //     const pr2 = resp.json();
  //     pr2
  //       .then((res) => {
  //         console.log(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  console.log("App.jsx start", userList);
  const getData = async () => {
    try {
      console.log("Inside GetData");
      const response = await fetch("https://dummyjson.com/users");
      let data = await response.json();
      console.log("data get Successfully");
      data = data.users;
      console.log(data);

      setUserList(data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log("--before getData called--");
  // getData(); // cause of infinte re-rendering when i use useState() because it useState re-render
  console.log("---After--getData called---");
  // useEffect(()=>{
  //   getData();
  // },[]) // 

  return (
    <div>
      <h1>Hello from React</h1>
      {/* <div>
        {
          userList.length>0?<div>
            {
              userList.map((e)=>{
                
                return <div>
                  <p>Name: {e.firstName} {e.maidenName} {e.lastName}</p>
                </div>
              })
            }
          </div>:<div>no data</div>
        }
      </div> */}

      <div>
        <Time/>
      </div>
    </div>
  );
};

export default App;
