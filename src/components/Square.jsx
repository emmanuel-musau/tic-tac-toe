export default function Square({ value }) {
  const handleClick = () => {
    console.log(`Square clicked: ${value}`);
  };
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
