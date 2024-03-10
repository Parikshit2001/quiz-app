/* eslint-disable react/prop-types */

import { useState } from "react"
import Question from "./components/Question"
import Start from "./components/Start"
import ScoreCard from "./components/ScoreCard";
import questions from './constants/quesitions.json'

function App() {

  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [comp, setComp] = useState(0);

  const handleRestart = () => {
    setScore(0);
    setComp(0);
    setCurrentQuestion(0);
  }

  const handleNext = (index) => {
    if(index>=0 && index < 4 && questions[currentQuestion].answerOptions[index].isCorrect) {
      setScore(score + 1);
    }
    
    if(currentQuestion < 9) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setComp(2);
    }
  }
  
  return (
    <div className="flex justify-center items-center h-screen">
      {comp == 0 && <Start handleClick={() => setComp(1)} />}
      {comp == 1 && <Question question={questions[currentQuestion].question} options={questions[currentQuestion].answerOptions} handleNext={handleNext} />}
      {comp == 2 && <ScoreCard score={score} handleRestart={handleRestart}/>}
    </div>
  )
}

export default App