type SquareProps = {
  value: string;
  onSquareClick: () => void;
};
export default function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
