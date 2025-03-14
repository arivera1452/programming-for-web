import "./App.css"

// hook
import { useState } from "react";

const camelidImages = ["./llama.jpg", "./alpaca.jpg"];

function App() {
  const [camelid, setCamelid] = useState(0);

  return (
    <>
    <h1>Camleids</h1>
   
    <div>
      <button onClick={() => {
        setCamelid(camelid);
      }}>Llama</button>
    </div>
    <div>
      <button onClick={() => {
        setCamelid(camelid + 1);
      }}>Alpaca</button>
    </div>
    <img src={camelidImages} alt="camelid" />
    </>
  )
}

export default App
