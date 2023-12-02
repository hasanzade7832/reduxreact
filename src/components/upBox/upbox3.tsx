import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store"; // Make sure this import is correct
import { counterSlice } from "../../redux/counterSlice";

const UpBox: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  console.log(counter);

  return (
    <div
      style={{ backgroundColor: "#e1e1e1", padding: "20px", color: "black" }}
    >
      <button
        onClick={() => dispatch(counterSlice.actions.incrementByAmount(2))}
      >
        click
      </button>
      <h1>counter: {counter}</h1>
    </div>
  );
};

export default UpBox;
