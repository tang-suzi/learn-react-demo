export default function Item({ name, isPacked, importance }) {
  return (
    <li className="item">
      {name}
      {isPacked && "✅"} {/** 使用&& */}
      {isPacked ? "✅" : "❌"} {/** 使用三目运算符 */}
      {importance > 0 && <span>("重要性：" {importance})</span>}
    </li>
  );
}
