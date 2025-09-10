import { Button } from "antd";

export default function MyButton({ count, handleClick }) {
  return <Button onClick={handleClick}>{count}</Button>;
}
