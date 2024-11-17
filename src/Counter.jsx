import React from "react";
import { increment, decrement } from "./redux/slices/counterSlice";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <button aria-label="Increment" onClick={() => dispatch(increment())}>
          Increment
        </button>
      </div>
      <span>{count}</span>
      <div>
        <button aria-label="Decrement" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </>
  );
};

export default Counter;
