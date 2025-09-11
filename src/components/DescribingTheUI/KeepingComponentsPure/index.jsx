/**
 * 1. 组件作为公式的纯函数
 * 2. 不应该改变任何用于组件渲染的输入。这包括 props、state 和 context。
 * 3. 在返回的 JSX 中表达组件逻辑。需要“改变事物”时，通常在事件处理程序中进行。作为最后的手段，可以使用 useEffect。
 */
const stories = [
  { id: 0, label: "Ankit's Story" },
  { id: 1, label: "Taylor's Story" },
];
export default function KeepingComponentsPure() {
  const storiesToDisplay = stories.slice();
  storiesToDisplay.push({
    id: "create",
    label: "Create Story",
  });

  return (
    <ul>
      {storiesToDisplay.map((story) => (
        <li key={story.id}>{story.label}</li>
      ))}
    </ul>
  );
}
