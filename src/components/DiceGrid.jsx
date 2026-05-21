function DiceGrid({ diceCount, gridSize }) {
  return (
    <div
      className="dice-grid"
      style={{
        gridTemplateColumns: `repeat(${gridSize}, 34px)`,
      }}
    >
      {Array.from({ length: diceCount }).map(
        (_, index) => (
          <span key={index} className="dice" />
        )
      )}
    </div>
  );
}

export default DiceGrid;