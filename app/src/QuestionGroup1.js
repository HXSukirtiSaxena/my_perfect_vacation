import React from "react";
const QuestionGroup = () => {
    const questions = [
        {
            questionText: 'Where do you want to go for vacations?',
            answerOptions: [
                { answerText: 'Local', isCorrect: false },
                { answerText: 'International', isCorrect: false },
            ],
        },
    ]
    return  <>
        <div>
            <div className='question-text'>{questions[0].questionText}</div>
        </div>
    </>
}
export default QuestionGroup;