import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, setQuestions }) {

  function handleDeleteQuestion(deletedQuestion) {
    setQuestions(questions.filter((question) => question.id !== deletedQuestion));
  }

  function handleAnswerChange(changedQuestion) {
    const newQuestsArray = questions.map((question) => {
      if (question.id === changedQuestion.id) {
        question.correctIndex = changedQuestion.correctIndex
        return question
      }
      else {
        return question
      }
    }
    );
    setQuestions(newQuestsArray)
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem onAnswer={handleAnswerChange}onDeleteQuestion={handleDeleteQuestion}key={question.id} id={question.id}question={question.prompt} answers={question.answers}correctIndex={question.correctIndex}/>
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
