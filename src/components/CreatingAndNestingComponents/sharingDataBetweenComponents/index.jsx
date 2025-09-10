import { useState } from "react";
import MyButton from "./MyButton";

export default function SharingDataBetweenComponents() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>共同更新</h2>
      <MyButton
        count={count}
        handleClick={() => {
          setCount((c) => c + 1);
        }}
      />
      <MyButton
        count={count}
        handleClick={() => {
          setCount((c) => c + 1);
        }}
      />
    </>
  );
}
