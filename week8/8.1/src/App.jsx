import "./App.css"

// hook
import { useState } from "react";

const llama = "./llama.jpg";
const alpaca = "./alpaca.jpg";

function App() {
  const [camelid, setCamelid] = useState(0);

  return (
    <>
    <h1>Camleids</h1>
   
    <div>
      <button onClick={() => {
        setCamelid(llama);
      }}>Llama</button>
    </div>
    <div>
      <button onClick={() => {
        setCamelid(alpaca);
      }}>Alpaca</button>
    </div>
    <img src={camelid} alt="Select your favorite!" />
    </>
  )
}

export default App
