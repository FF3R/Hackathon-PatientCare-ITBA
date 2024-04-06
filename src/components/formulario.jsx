import React, { useState } from 'react';
import './formulario.css';

function Formulario() {
 const [questions, setQuestions] = useState([
    { question: '', answers: [] }
 ]);

 const addQuestion = () => {
    setQuestions([...questions, { question: '', answers: [] }]);
 };

 const removeQuestion = (index) => {
    setQuestions(questions.filter((_, i) => i !== index));
 };

 const addAnswer = (questionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].answers.push('');
    setQuestions(newQuestions);
 };

 const removeAnswer = (questionIndex, answerIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].answers.splice(answerIndex, 1);
    setQuestions(newQuestions);
 };

 const handleQuestionChange = (index, event) => {
    const newQuestions = [...questions];
    newQuestions[index].question = event.target.value;
    setQuestions(newQuestions);
 };

 const handleAnswerChange = (questionIndex, answerIndex, event) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].answers[answerIndex] = event.target.value;
    setQuestions(newQuestions);
 };

 const handleSubmit = (event) => {
    event.preventDefault();
    console.log(questions);
 };

 return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="buttons-container">
          <button type="button" onClick={addQuestion}>Add Question</button>
          <button type="submit">Submit</button>
        </div>
        <div className="questions-container">
          {questions.map((question, questionIndex) => (
            <div key={questionIndex} className="question-box">
              <input
                type="text"
                value={question.question}
                placeholder={`Question ${questionIndex + 1}`}
                onChange={(event) => handleQuestionChange(questionIndex, event)}
              />
              {question.answers.map((answer, answerIndex) => (
                <div key={answerIndex}>
                <input
                  type="text"
                  value={answer}
                  placeholder={`Answer ${answerIndex + 1}`}
                  onChange={(event) => handleAnswerChange(questionIndex, answerIndex, event)}
                />
                {/* Replace the text with the Font Awesome icon */}
                <button className="remove-answer-btn" onClick={() => removeAnswer(questionIndex, answerIndex)}>
 <i className="fa fa-times" aria-hidden="true"></i>
</button>
             </div>
              ))}
              <button type="button" onClick={() => addAnswer(questionIndex)}>Add Answer</button>
              <button onClick={() => removeQuestion(questionIndex)}>Remove Question</button>
            </div>
          ))}
        </div>
      </form>
    </div>
 );
}

export default Formulario;
