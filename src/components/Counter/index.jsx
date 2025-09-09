import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "@/store/counter/counterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </>
  );
};

export default Counter;
