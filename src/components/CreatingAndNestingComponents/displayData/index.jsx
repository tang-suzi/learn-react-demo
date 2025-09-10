import styles from "./index.module.scss";
const DisplayData = () => {
  const user = {
    name: "Hedy Lamarr",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
  };
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className={styles.avatar}
        src={user.imageUrl}
        alt={user.name}
        style={{ width: user.imageSize, height: user.imageSize }}
      />
    </>
  );
};

export default DisplayData;
