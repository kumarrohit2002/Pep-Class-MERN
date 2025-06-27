import { useState } from "react";
import "./AppCreate.css";

const App = () => {
  const [fruits, setFruits] = useState([
    {
      name: "Kiwi",
      color: "green",
      price: 600,
    },
    {
      name: "Banana",
      color: "yellow",
      price: 40,
    },
    {
      name: "Apple",
      color: "red",
      price: 200,
    },
    {
      name: "Mango",
      color: "yellow",
      price: 150,
    },
  ]);

  const [editIndex, setEditIndex] = useState(-1);

  return (
    <div className="card-container">
      {fruits.map((e, idx) => {
        return (
          <div key={idx} className="card" style={`background:${e.color}`}>
            <h3>{e.name}</h3>
            <h4>{e.color}</h4>
            <h3>{e.price}</h3>
            <button onClick={() => setEditIndex(idx)}>Edit</button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
