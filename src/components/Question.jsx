/* eslint-disable react/prop-types */

import { useState } from "react"
import Button from "./Button"

function Question({question, options, handleNext}) {
  const [index, setIndex] = useState(-1);

  return (
    <div className="absolute left-10 top-20">
      <h2 className="text-3xl font-semibold">{question}</h2>
      <ul className="grid grid-cols-2 cursor-pointer">
        {options.map((item, i) => {
          return <li key={i} onClick={() => setIndex(i)} className={`bg-gray-200 m-1 text-center ${index == i ? 'bg-green-500' : null}`}>{item.text}</li>
        })}
      </ul>
      <Button handleClick={() => {
        setIndex(-1) 
        handleNext(index)
      }}>NEXT</Button>
    </div>
  )
}

export default Question