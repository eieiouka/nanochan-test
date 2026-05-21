import { useState } from "react";
import "./App.css";

const questions = [
  {
    id: 1,
    title: "第1問",
    story:
      "エマはサイコロを使って、正方形を作ろうとしています。",
    question:
      "サイコロが16個あります。1人で正方形を作るなら、一辺は何個になりますか？",
    answer: 4,
    diceCount: 16,
    gridSize: 4,
  },
];

function App() {
  const [currentIndex, setCurrentIndex] =
    useState(0);
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] =
    useState(false);

  const currentQuestion = questions[currentIndex];

  const checkAnswer = () => {
    const userAnswer = Number(input);

    if (userAnswer === currentQuestion.answer) {
      setResult("正解！");
      setScore((prev) => prev + 1);
    } else {
      setResult("不正解…");
    }
  };

  const goNext = () => {
    const nextIndex = currentIndex + 1;

    if (nextIndex >= questions.length) {
      setIsFinished(true);
      return;
    }

    setCurrentIndex(nextIndex);
    setInput("");
    setResult("");
  };

  const resetGame = () => {
    setCurrentIndex(0);
    setInput("");
    setResult("");
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <main className="app">
        <section className="test-card">
          <Header />

          <h2 className="result-title">
            結果発表
          </h2>

          <p className="score">
            {questions.length}問中 {score}問 正解
          </p>

          <button onClick={resetGame}>
            もう一度
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="app">
      <section className="test-card">
        <Header />

        <div className="question-panel">
          <p className="label">
            ◆ {currentQuestion.title} ◆
          </p>

          <p className="story">
            {currentQuestion.story}
          </p>

          <div
            className="dice-grid"
            style={{
              gridTemplateColumns: `repeat(${currentQuestion.gridSize}, 34px)`,
            }}
          >
            {Array.from({
              length: currentQuestion.diceCount,
            }).map((_, index) => (
              <span
                key={index}
                className="dice"
              />
            ))}
          </div>

          <p className="question">
            {currentQuestion.question}
          </p>

          <div className="answer-row">
            <span>一辺 = </span>

            <input
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              type="number"
              inputMode="numeric"
              placeholder=""
            />

            <span>個</span>
          </div>

          {!result && (
            <button
              onClick={checkAnswer}
              disabled={input === ""}
            >
              答え合わせ
            </button>
          )}

          {result && (
            <div className="result-box">
              <p
                className={
                  result === "正解！"
                    ? "correct"
                    : "wrong"
                }
              >
                {result}
              </p>

              <button onClick={goNext}>
                次へ
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function Header() {
  return (
    <header className="header">
      <img
        src="/images/ema-icon.png"
        alt="桜羽エマ"
        className="ema-icon"
      />

      <div className="title-area">
        <h1 className="main-title">
          小学校のテスト
        </h1>

        <p className="sub-title">
          赤点を取っちゃダメだよ！
        </p>
      </div>
    </header>
  );
}

export default App;