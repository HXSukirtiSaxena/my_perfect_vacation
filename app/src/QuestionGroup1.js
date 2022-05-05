import { useState } from 'react'

export default function QuestionGroup1() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const [score, setScore] = useState(0)

    const questions = [
        {
            questionText: 'Where do you want to go for vacations?',
            answerOptions: [
                { answerText: 'Local', isCorrect: false },
                { answerText: 'International', isCorrect: false },
            ],
        },
        {
            questionText: 'Where do you want to go out of Country?',
            answerOptions: [
                { answerText: 'New York', isCorrect: false },
                { answerText: 'London', isCorrect: false },
                { answerText: 'Paris', isCorrect: true },
                { answerText: 'Dublin', isCorrect: false },
            ],
        },
        {
            questionText: 'What kind of holiday you want to go?',
            answerOptions: [
                { answerText: 'Beach', isCorrect: false },
                { answerText: 'Resort', isCorrect: true },
                { answerText: 'Camping', isCorrect: false },
                { answerText: 'Desert', isCorrect: false },
            ],
        },
        {
            questionText: 'Alone? Friends? partner or Full family!!',
            answerOptions: [
                { answerText: 'Alone', isCorrect: true },
                { answerText: 'Friends', isCorrect: false },
                { answerText: 'Partner', isCorrect: false },
                { answerText: 'Full family', isCorrect: false },
            ],
        },
        {
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: '1', isCorrect: false },
                { answerText: '4', isCorrect: false },
                { answerText: '6', isCorrect: false },
                { answerText: '7', isCorrect: true },
            ],
        },
    ]
    const handleAnswerButtonClick = (answerOption, isCorrect) => {
        if (answerOption.isCorrect) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion)
        } else {
            setShowScore(true);
        }
    }
    return <>
    <div className='question-section'>
        <div className='question-count'>
            <span>Question {currentQuestion + 1}</span>/{questions.length}
        </div>
        <div className='question-text'>{questions[currentQuestion].questionText}</div>
    </div>
    <div className='answer-section'>
        {questions[currentQuestion].answerOptions.map((answerOption, index) => (
            <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
        ))}
    </div>
</>
}
