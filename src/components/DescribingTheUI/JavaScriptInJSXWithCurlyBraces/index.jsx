/**
 * 1. JSX 引号内的值会作为字符串传递给属性。
 * 2. 大括号让你可以将 JavaScript 的逻辑和变量带入到标签中。
 * 3. 它们会在 JSX 标签中的内容区域或紧随属性的 = 后起作用。
 * 4. {{ 和 }} 并不是什么特殊的语法：它只是包在 JSX 大括号内的 JavaScript 对象。
 */
import styles from "./index.module.scss";
export default function JavascriptInJSXWithCurlyBraces() {
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = "Gregorio Y. Zara";
  return (
    <>
      <img className={styles.avatar} src={avatar} alt={description} />
      <h1
        style={{
          backgroundColor: "black",
          color: "pink",
        }}
      >
        {description}的待办事项
      </h1>
    </>
  );
}
