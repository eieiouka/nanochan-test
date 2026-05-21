function QuestionRenderer({ question }) {
  return (
    <>
      <p className="story">{question.story}</p>

      <p className="question">
        {question.question}
      </p>
    </>
  );
}

export default QuestionRenderer;