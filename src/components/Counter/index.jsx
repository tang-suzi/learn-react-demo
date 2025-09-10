import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "@/store/counter/counterSlice";
import { Button } from "antd";
const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <h2>{count}</h2>
      <Button onClick={() => dispatch(increment())}>increment</Button>
      <Button onClick={() => dispatch(decrement())}>decrement</Button>
    </>
  );
};

export default Counter;
