import Square from "./Square";

type BoardProps = {
  isXNext: boolean;
  squares: any[];
  onPlay: (squares: any[]) => void;
};
export default function Board({ isXNext, squares, onPlay }: BoardProps) {
  const winner = calculateWinner(squares);

  let status;

  if (winner) {
    status = `The player controlling ${winner} has Won.`;
  } else {
    status = `The player controlling ${isXNext ? "X" : "O"} should play next.`;
  }

  function handleClick(index: number) {
    if (squares[index] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();
    if (isXNext) {
      nextSquares[index] = "X";
    } else {
      nextSquares[index] = "O";
    }

    onPlay(nextSquares);
  }

  function calculateWinner(squares: any[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let index = 0; index < lines.length; index++) {
      const [a, b, c] = lines[index];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square
          value={squares[0]}
          onSquareClick={() => {
            handleClick(0);
          }}
        />
        <Square
          value={squares[1]}
          onSquareClick={() => {
            handleClick(1);
          }}
        />
        <Square
          value={squares[2]}
          onSquareClick={() => {
            handleClick(2);
          }}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[3]}
          onSquareClick={() => {
            handleClick(3);
          }}
        />
        <Square
          value={squares[4]}
          onSquareClick={() => {
            handleClick(4);
          }}
        />
        <Square
          value={squares[5]}
          onSquareClick={() => {
            handleClick(5);
          }}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          onSquareClick={() => {
            handleClick(6);
          }}
        />
        <Square
          value={squares[7]}
          onSquareClick={() => {
            handleClick(7);
          }}
        />
        <Square
          value={squares[8]}
          onSquareClick={() => {
            handleClick(8);
          }}
        />
      </div>
    </>
  );
}
