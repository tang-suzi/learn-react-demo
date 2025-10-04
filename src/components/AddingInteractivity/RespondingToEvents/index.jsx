import { Button } from "antd";

export default function RespondingToEvents() {
  return (
    <>
      <Button>未绑定事件</Button>
      <Button onClick={() => alert("点击")}>点击</Button>
      <ul>
        <li>
          {"你可以通过将函数作为 prop 传递给元素如 <button> 来处理事件。"}
        </li>
        <li>
          {
            "必须传递事件处理函数，而非函数调用！ onClick={handleClick} ，不是 onClick={handleClick()}。"
          }
        </li>
        <li>{"你可以单独或者内联定义事件处理函数。"}</li>
        <li>{"事件处理函数在组件内部定义，所以它们可以访问 props。"}</li>
        <li>
          {
            "你可以在父组件中定义一个事件处理函数，并将其作为 prop 传递给子组件。"
          }
        </li>
        <li>{"你可以根据特定于应用程序的名称定义事件处理函数的 prop。"}</li>
        <li>
          {
            "事件会向上传播。通过事件的第一个参数调用 e.stopPropagation() 来防止这种情况。"
          }
        </li>
        <li>
          {
            "事件可能具有不需要的浏览器默认行为。调用 e.preventDefault() 来阻止这种情况。"
          }
        </li>
        <li>
          {"从子组件显式调用事件处理函数 prop 是事件传播的另一种优秀替代方案。"}
        </li>
      </ul>
    </>
  );
}
