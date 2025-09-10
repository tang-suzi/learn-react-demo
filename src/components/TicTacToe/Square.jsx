import { Button } from "antd";
import styles from "./index.module.scss";
// import { useState } from "react";
export default function Square({ value, onSquareClick }) {
  return (
    <Button
      className={styles.square}
      onClick={onSquareClick}
      style={{ borderRadius: 0 }}
    >
      {value}
    </Button>
  );
}
