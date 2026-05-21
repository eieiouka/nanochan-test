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

  const [inputs, setInputs] = useState([]);

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
    if (
      currentQuestion.layout ===
      "formula-inputs"
    ) {
      const userAnswers = inputs.map(
        (value) => Number(value)
      );

      const correctAnswers =
        currentQuestion.answers;

      const shouldIgnoreOrder =
        currentQuestion.answerOrder !==
        "exact";

      const normalizedUserAnswers =
        shouldIgnoreOrder
          ? [...userAnswers].sort(
              (a, b) => a - b
            )
          : userAnswers;

      const normalizedCorrectAnswers =
        shouldIgnoreOrder
          ? [...correctAnswers].sort(
              (a, b) => a - b
            )
          : correctAnswers;

      if (
        JSON.stringify(
          normalizedUserAnswers
        ) ===
        JSON.stringify(
          normalizedCorrectAnswers
        )
      ) {
        setResult("正解！");

        setScore((prev) => prev + 1);
      } else {
        setResult("不正解…");
      }

      return;
    }

    const userAnswer = Number(input);

    if (
      userAnswer ===
      currentQuestion.answer
    ) {
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

    setInputs([]);

    setResult("");
  };

  const resetGame = () => {
    setCurrentIndex(0);

    setInput("");

    setInputs([]);

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

  const isButtonDisabled =
    !isAnswered &&
    (currentQuestion.layout ===
    "formula-inputs"
      ? inputs.length !==
          currentQuestion.answers
            .length ||
        inputs.some(
          (value) => value === ""
        )
      : input === "");

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

            {currentQuestion.layout ===
            "formula-inputs" ? (
              <div className="formula-row">
                {currentQuestion.formula.map(
                  (part, index) => {
                    if (
                      part !== "input"
                    ) {
                      return (
                        <span key={index}>
                          {part}
                        </span>
                      );
                    }

                    const inputIndex =
                      currentQuestion.formula
                        .slice(0, index)
                        .filter(
                          (item) =>
                            item ===
                            "input"
                        ).length;

                    return (
                      <input
                        key={index}
                        className="formula-input"
                        value={
                          inputs[
                            inputIndex
                          ] ?? ""
                        }
                        onChange={(
                          e
                        ) => {
                          const next = [
                            ...inputs,
                          ];

                          next[
                            inputIndex
                          ] =
                            e.target.value.replace(
                              /[^0-9]/g,
                              ""
                            );

                          setInputs(
                            next
                          );
                        }}
                        type="text"
                        inputMode="numeric"
                        disabled={
                          isAnswered
                        }
                      />
                    );
                  }
                )}
              </div>
            ) : (
              <div className="answer-row">
                <span>
                  {
                    currentQuestion.answerLabel
                  }
                  ：
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
                  {
                    currentQuestion.answerUnit
                  }
                </span>
              </div>
            )}

            <button
              onClick={
                isAnswered
                  ? goNext
                  : checkAnswer
              }
              disabled={
                isButtonDisabled
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