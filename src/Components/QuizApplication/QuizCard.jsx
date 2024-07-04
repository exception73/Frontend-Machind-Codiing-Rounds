import React from 'react'

const QuizCard = ({ques, setAnswer, answer}) => {
    if(!ques) return <></>
  return (
    <div>

        <div>Ques: {ques.question}</div>
        <div>
            {
                ques.answerOptions.map((val, ind) => {
                   return <button style={{margin:'10px'}} onClick={() => setAnswer([...answer, val.isCorrect])}  key={ind}>{val.text}</button>
                })
            }
        </div>

    </div>
  )
}

export default QuizCard