import { Button } from "antd";

export default function MyButton() {
  const handleClick = () => {
    alert("点击事件触发了");
  };
  return <Button onClick={handleClick}>点击</Button>;
}
