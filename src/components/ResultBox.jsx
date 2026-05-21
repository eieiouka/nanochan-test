function ResultBox({ result, onNext }) {
  return (
    <div className="result-box">
      <p
        className={
          result === "正解！" ? "correct" : "wrong"
        }
      >
        {result}
      </p>

      <button onClick={onNext}>次へ</button>
    </div>
  );
}

export default ResultBox;