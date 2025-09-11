/**
 * 1. 只能有一个根元素
 * 2. 标签必须闭合
 * 3. 使用驼峰式命名法给大部分属性命名
 */
export default function WritingMarkupWithJSX() {
  return (
    <>
      <h1>海蒂·拉玛的待办事项</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul>
        <li>发明一种新式交通信号灯</li>
        <li>排练一个电影场景</li>
        <li>改进频谱技术</li>
      </ul>
    </>
  );
}
