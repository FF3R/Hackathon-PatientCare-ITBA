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
                    <button type="button" onClick={addQuestion}>Agregar Pregunta</button>
                    <button type="submit">Enviar</button>
                </div>
                <div className="questions-container">
                    {questions.map((question, questionIndex) => (
                        <div key={questionIndex} className="question-box">
                            <div className="question-input">
                                <input
                                    type="text"
                                    className="question-input2"
                                    value={question.question}
                                    placeholder={`Pregunta ${questionIndex + 1}`}
                                    onChange={(event) => handleQuestionChange(questionIndex, event)}
                                />
                                <button className="remove-answer-btn" onClick={() => removeQuestion(questionIndex)}>
                                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                                </button>
                            </div>
                            {question.answers.map((answer, answerIndex) => (
                                <div key={answerIndex} className="answer-input-container">
                                    <input
                                        className="question-input2"
                                        type="text"
                                        value={answer}
                                        placeholder={`Respuesta ${answerIndex + 1}`}
                                        onChange={(event) => handleAnswerChange(questionIndex, answerIndex, event)}
                                    />
                                    <button className="remove-answer-btn" onClick={() => removeAnswer(questionIndex, answerIndex)}>
                                        <i className="fa fa-times" aria-hidden="true"></i>
                                    </button>
                                </div>
                            ))}
                            <button className="add-answer-btn" type="button" onClick={() => addAnswer(questionIndex)}>
                                <i className="fa fa-plus" aria-hidden="true"></i>
                            </button>
                        </div>
                    ))}
                </div>
            </form>
        </div>
    );
}

export default Formulario;
