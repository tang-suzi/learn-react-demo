/**
 * TODO:
 * 1. 仅针对当前着手，显示“You are at move #…”而不是按钮。
 * 2. 重写 Board 以使用两个循环来制作方块而不是对它们进行硬编码。
 * 3. 添加一个切换按钮，使可以按升序或降序对落子的步数进行排序。
 * 4. 当有人获胜时，突出显示致使获胜的三个方块（当没有人获胜时，显示一条关于结果为平局的消息）。
 * 5. 在“落子”的历史列表中以 (row, col) 格式显示每步的位置。
 */
import styles from "./index.module.scss";
import Board from "./Board";
import { useState } from "react";
import { Button } from "antd";
export default function TicTacToe() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };
  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
  };

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <Button onClick={() => jumpTo(move)}>{description}</Button>
      </li>
    );
  });
  return (
    <>
      <div className={styles.game}>
        <div className={styles["game-board"]}>
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        <div className={styles["game-info"]}>
          <ol>{moves}</ol>
        </div>
      </div>
    </>
  );
}
