import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, setQuestions }) {

  function handleDeleteQuestion(deletedQuestion) {
    setQuestions(questions.filter((question) => question.id !== deletedQuestion));
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem onDeleteQuestion={handleDeleteQuestion}key={question.id} id={question.id}question={question.prompt} answers={question.answers}correctIndex={question.correctIndex}/>
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
