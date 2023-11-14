import { useState } from "react";

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);
  
  const increment = () => {
    if (count < stock) {
      return setCount(count + 1);
    }
    setCount(count);
  };

  const decrement = () => {
    if (count === 0) {
      return setCount(0);
    }
    setCount(count - 1);
  };


  return (
    <div className="d-flex flex-column col-2 justify-content-center align-content-center align-items-center border border-3 border-success rounded-3 p-4">
      <div>
        <button className="btn btn-primary mx-3" onClick={increment}>
          +
        </button>
        <strong>{count}</strong>
        <button className="btn btn-danger mx-3" onClick={decrement}>
          -
        </button>
      </div>
      <button className="btn btn-outline-success mt-2" onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
};
