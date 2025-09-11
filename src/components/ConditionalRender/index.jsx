import Item from "./Item";

const packingList = [
  { name: "宇航服", isPacked: true, importance: 9 },
  { name: "带金箔的头盔", isPacked: true, importance: 0 },
  { name: "Tam 的照片", isPacked: false, importance: 6 },
];
export default function ConditionalRender() {
  return (
    <section>
      <h1>Sally Ride 的行李清单</h1>
      <ul>
        {packingList.map((pack) => (
          <Item
            name={pack.name}
            isPacked={pack.isPacked}
            importance={pack.importance}
          />
        ))}
      </ul>
    </section>
  );
}
