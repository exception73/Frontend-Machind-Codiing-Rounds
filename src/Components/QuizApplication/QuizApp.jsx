import React, { useEffect, useState } from 'react'
import data from './Data/Data'
import QuizCard from './QuizCard';

const QuizApp = () => {
   
    const [questions, setQuestion] = useState(data);
    const [answer, setAnswer] = useState([]);
    const [currQues, setcurrQues] = useState(-1);
   

    useEffect(() => {
        setcurrQues(currQues+1);
      
    },[answer])

    
    function handleRetry(){
        setcurrQues(-1);
        setAnswer([])
    }
  return (

    <div>

        <h2>Quiz</h2>

       {currQues < questions.length ?  
       <QuizCard ques={questions[currQues]} setAnswer={setAnswer}  answer={answer}/> 
        : 
        <div>
            <p>Marsk : {answer.reduce((val,sum)=> {return val+sum}, 0)}/10</p>
            <button onClick={handleRetry}>Retry</button>
            <div>
                {answer.map((val, ind) => {
                    return <p style={{color:answer[ind]? 'green':'red'}}>{data[ind].question}</p>
                })}
            </div>
        </div>
        }

    </div>
  )
}

export default QuizApp