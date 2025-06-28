import { useState } from "react";
import "./Curd.css";

const FRUITS = [
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
];

const App = () => {
  const [editIndex, setEditIndex] = useState(-1);
  const [fruits, setFruits] = useState(FRUITS);

  const handleSubmit = (e, idx) => {
    e.preventDefault();
    setFruits((prev) => {
      const temp = [...prev];
      temp[idx].name = e.target.fruitName.value;
      return temp;
    });
    setEditIndex(-1);
  };

  return (
    <div className="card-container">
      {fruits.map((elem, idx) => {
        return (
          <div key={idx}>
            {editIndex !== idx ? (
              <div className="showCar">
                <h4>{elem.name}</h4>
                <h4>{elem.color}</h4>
                <h4>{elem.price}</h4>
                <button
                  onClick={() => {
                    setEditIndex(idx);
                  }}
                >
                  Edit
                </button>
              </div>
            ) : (
              <div>
                <form
                  onSubmit={(e) => {
                    handleSubmit(e, idx);
                  }}
                  onReset={() => setEditIndex(-1)}
                >
                  <input type="text" name="fruitName" />
                  <button>Update</button>
                  <button type="reset">Cancel</button>
                </form>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default App;

// {idx === editIndex ? <input type="text" /> : <h1>{elem}</h1>}
