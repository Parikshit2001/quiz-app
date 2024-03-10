/* eslint-disable react/prop-types */

import Button from "./Button"

function Start({handleClick}) {
  return (
    <div className="absolute left-20 top-40">
      <Button onClick={handleClick} handleClick={handleClick}>START</Button>
    </div>
  )
}

export default Start