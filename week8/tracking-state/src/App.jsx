import{ use, useState } from "react";

function App() {
// hook rules
// top level
// not in conditions
// part of react ecosphere
const [leftScore, setLeftScore] = useState(0);
const [rightScore, setRightScore] = useState(0);

function increaseRightScore() {
  setRightScore(rightScore + 1);
}

  return (
    <div>
        <div className="scoreboard">
          Left Score: {leftScore} Right Score: {rightScore}
        </div>
        <div className="contols">
          <button onClick={() => {
            setLeftScore(leftScore + 1);
          }}>left</button>
          <button onClick={increaseRightScore}>right</button>
        </div>
    </div>
  )
}

export default App
