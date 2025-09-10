import { Button } from "antd";
import { useState } from "react";

export default function MyButton() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((c) => c + 1);
  };
  return <Button onClick={handleClick}>点击{count}</Button>;
}
