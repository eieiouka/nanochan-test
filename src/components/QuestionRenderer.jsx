import DiceGrid from "./DiceGrid";

function QuestionRenderer({ question }) {
  if (question.layout === "dice-square") {
    return (
      <>
        <p className="story">{question.story}</p>

        <DiceGrid
          diceCount={question.diceCount}
          gridSize={question.gridSize}
        />

        <p className="question">
          {question.question}
        </p>
      </>
    );
  }

  return (
    <>
      <p className="story">{question.story}</p>
      <p className="question">{question.question}</p>
    </>
  );
}

export default QuestionRenderer;