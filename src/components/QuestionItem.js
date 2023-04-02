import React from "react";

function QuestionItem({ onAnswer, id, question, answers, correctIndex, onDeleteQuestion }) {

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDeleteClick() {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteQuestion(id))
  }

  function handleAnswer(e) {
      fetch(`http://localhost:4000/questions/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "correctIndex": e.target.value
        })
    })
        .then((r) => r.json())
        .then((data) => onAnswer(data))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {question}</h5>
      <label>
        Correct Answer:
        <select 
          onChange={handleAnswer}
          defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
