import AdminPanel from "./AdminPanel";
import LoginForm from "./LoginForm";
const ConditionalRendering = () => {
  const isLoggedIn = false;
  let content;
  if (isLoggedIn) {
    content = <LoginForm />;
  } else {
    content = <AdminPanel />;
  }
  return (
    <>
      <h3>使用 if 语句根据条件引入 JSX：</h3>
      {content}
      <h3>使用 条件 ? 运算符</h3>
      {<div>{isLoggedIn ? <AdminPanel /> : <LoginForm />}</div>}
      <h3>使用更简短的 逻辑 && 语法</h3>
      {!isLoggedIn && <AdminPanel />}
    </>
  );
};
export default ConditionalRendering;
