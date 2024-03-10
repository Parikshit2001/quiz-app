/* eslint-disable react/prop-types */

import Button from "./Button"

function ScoreCard({score, handleRestart}) {
  return (
    <div className="flex-col flex absolute left-20 top-40">
      <h2 className="text-xl">You Scored {score}/10</h2>
      <Button handleClick={handleRestart}>RESTART</Button>
    </div>
  )
}

export default ScoreCard