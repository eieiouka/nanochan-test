import {
  useEffect,
  useRef,
  useState,
} from "react";

import "./App.css";
import { questions } from "./data/questions";

import Header from "./components/Header";
import QuestionRenderer from "./components/QuestionRenderer";

const TEST_BGM_START = 0;

const CLEAR_BGM_START = 2.6;

const GAMEOVER_BGM_START = 7.6;

function App() {
  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [input, setInput] = useState("");

  const [result, setResult] = useState("");

  const [score, setScore] = useState(0);

  const [isFinished, setIsFinished] =
    useState(false);

  const [isStarted, setIsStarted] =
    useState(false);

  const bgmRef = useRef(null);

  const clearBgmRef = useRef(null);

  const gameoverBgmRef = useRef(null);

  const currentQuestion = questions[currentIndex];

  const isAnswered = result !== "";

  const isCorrect = result === "正解！";

  const scorePoint = Math.round(
    (score / questions.length) * 100
  );

  useEffect(() => {
    if (!isStarted || isFinished) return;

    if (bgmRef.current) {
      bgmRef.current.volume = 0.35;

      bgmRef.current.currentTime =
        TEST_BGM_START;

      bgmRef.current
        .play()
        .catch(() => {});
    }
  }, [isStarted, isFinished]);

  const startTest = () => {
    setIsStarted(true);
  };

  const checkAnswer = () => {
    const userAnswer = Number(input);

    if (userAnswer === currentQuestion.answer) {
      setResult("正解！");

      setScore((prev) => prev + 1);
    } else {
      setResult("不正解…");
    }
  };

  const playResultBgm = (
    finalScore
  ) => {
    if (bgmRef.current) {
      bgmRef.current.pause();

      bgmRef.current.currentTime = 0;
    }

    if (clearBgmRef.current) {
      clearBgmRef.current.pause();

      clearBgmRef.current.currentTime = 0;
    }

    if (gameoverBgmRef.current) {
      gameoverBgmRef.current.pause();

      gameoverBgmRef.current.currentTime = 0;
    }

    if (finalScore >= 60) {
      if (clearBgmRef.current) {
        clearBgmRef.current.volume = 0.4;

        clearBgmRef.current.currentTime =
          CLEAR_BGM_START;

        clearBgmRef.current
          .play()
          .catch(() => {});
      }
    } else {
      if (gameoverBgmRef.current) {
        gameoverBgmRef.current.volume = 0.45;

        gameoverBgmRef.current.currentTime =
          GAMEOVER_BGM_START;

        gameoverBgmRef.current
          .play()
          .catch(() => {});
      }
    }
  };

  const goNext = () => {
    const nextIndex = currentIndex + 1;

    if (nextIndex >= questions.length) {
      playResultBgm(scorePoint);

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

    setIsStarted(false);

    if (bgmRef.current) {
      bgmRef.current.pause();

      bgmRef.current.currentTime = 0;
    }

    if (clearBgmRef.current) {
      clearBgmRef.current.pause();

      clearBgmRef.current.currentTime = 0;
    }

    if (gameoverBgmRef.current) {
      gameoverBgmRef.current.pause();

      gameoverBgmRef.current.currentTime = 0;
    }
  };

  const getComment = () => {
    if (scorePoint === 100) {
      return "なかなかやるわね。満点よ。";
    }

    if (scorePoint >= 80) {
      return "あなたも赤点じゃないじゃない。";
    }

    if (scorePoint >= 60) {
      return "ギリギリって感じね…。";
    }

    return "あなた、赤点じゃない…。";
  };

  return (
    <main className="app">
      <audio
        ref={bgmRef}
        src="/sounds/bgm_test.mp3"
        loop
      />

      <audio
        ref={clearBgmRef}
        src="/sounds/bgm_clear.mp3"
      />

      <audio
        ref={gameoverBgmRef}
        src="/sounds/bgm_gameover.mp3"
      />

      {!isStarted ? (
        <section className="test-card start-card">
          <Header />

          <img
            src="/images/nanoka-akaten.jpg"
            alt="赤点のナノカちゃん"
            className="start-image"
          />

          <p className="start-message">
            ナノカちゃんの代わりに、
            満点を取ってあげよう！
          </p>

          <button onClick={startTest}>
            テストを始める
          </button>
        </section>
      ) : isFinished ? (
        <section className="test-card">
          <Header />

          <h2 className="result-title">
            結果発表
          </h2>

          <p
            className={
              scorePoint <= 59
                ? "score-point bad-score"
                : "score-point good-score"
            }
          >
            <span>{scorePoint}点</span>

            <small>
              （{score}/{questions.length}問）
            </small>
          </p>

          <div className="result-comment">
            <img
              src="/images/nanoka-icon.png"
              alt="黒部ナノカ"
              className="comment-icon"
            />

            <p>{getComment()}</p>
          </div>

          <button onClick={resetGame}>
            もう一度
          </button>
        </section>
      ) : (
        <section className="test-card">
          <Header />

          <div className="question-panel">
            <p className="label">
              ◆ {currentQuestion.title} ◆
            </p>

            <QuestionRenderer
              question={currentQuestion}
            />

            <div className="answer-row">
              <span>
                {currentQuestion.answerLabel} =
              </span>

              <input
                value={input}
                onChange={(e) =>
                  setInput(
                    e.target.value.replace(
                      /[^0-9]/g,
                      ""
                    )
                  )
                }
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                disabled={isAnswered}
              />

              <span>
                {currentQuestion.answerUnit}
              </span>
            </div>

            <button
              onClick={
                isAnswered
                  ? goNext
                  : checkAnswer
              }
              disabled={
                !isAnswered &&
                input === ""
              }
              className={
                isAnswered
                  ? isCorrect
                    ? "answer-button correct-button"
                    : "answer-button wrong-button"
                  : ""
              }
            >
              {isAnswered
                ? `${result}（次に進む）`
                : "答え合わせ"}
            </button>
          </div>
        </section>
      )}
    </main>
  );
}

export default App;