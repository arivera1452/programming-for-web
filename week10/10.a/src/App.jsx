import { Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
import { DeckDetail } from "./views/DeckDetail";
import deckData from "./assets/deck-data.json"
import './App.css';


function App() {

  return (
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path=":id" element={<DeckDetail data={deckData} />} />
    </Routes>
  )
}

export default App
