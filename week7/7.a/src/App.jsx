import "./App.css";
import { CommanderRow } from "./CommanderRow";
function App() {
  const commanderDecks = [
    {
      commander: "Elesh Norn // The Argent Etchings",
      colors: "White",
      theme: "Phyrexians",
      nickname: "Elesh Mom",
      identity: "Mono-white",
      image1: "./norn.webp",
      image2: "./etchings.webp",
      doubleSided: true
    },
    {
      commander: "Katsumasa, The Animator",
      colors: "Blue",
      theme: "Vehicles",
      nickname: "Autonomous Vehicles",
      identity: "Mono-blue",
      image1: "./katsumasa.webp",
    },
    {
      commander: "Aurelia, The Law Above",
      colors: ["White,", " Red"],
      theme: "Forced Combat",
      nickname: "Aurelia's Fury",
      identity: "Boros",
      image1: "./aurelia.webp"
    },
    {
      commander: "Mishra, Eminent One",
      colors: ["Blue,", " Black,", " Red"],
      theme: "Retro Border Artifacts",
      nickname: "Mishra's Retro Artifactory",
      identity: "Grixis",
      image1: "./mishra.webp"
    },
    {
      commander: "Erinis, Gloom Stalker & Scion of Halaster",
      colors: ["Black,", " Green"],
      theme: "Graveyard Landfall",
      nickname: "Life from the Loam",
      identity: "Golgari",
      image1: "./erinis.webp",
      image2: "./scion.webp",
      hasBackground: true
    },
    {
      commander: "Gev, Scaled Scorch",
      colors: ["Black,", " Red"],
      theme: "Lizards",
      nickname: "Spicy Lizards",
      identity: "Rakdos",
      image1: "./gev.webp"
    },
    {
      commander: "Huatli, Poet of Unity",
      colors: ["White,", " Red,", " Green"],
      theme: "Dinosaurs",
      nickname: "Huatli, The Dino Poet",
      identity: "Naya",
      image1: "./huatli.webp",
      image2: "./roar.webp",
      doubleSided: true
    },
    {
      commander: "Taeko, the Patient Avalanche",
      colors: ["Blue,", " Black"],
      theme: "Ninjas",
      nickname: "Hero on a Half Shell",
      identity: "Dimir",
      image1: "./taeko.webp"
    }
  ]
  return(
    <>
      <h1>My Commander Decks</h1>
      <p><strong style={{backgroundColor: "orange"}}>Orange Background</strong> = Double Sided</p>
      <p><strong style={{color: "green"}}>Green Text</strong> = Background Commander</p>
      <p><strong style={{fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"}}>Impact Font</strong> = Odd Rows</p>
      <table className="commander-table">
        <thead>
          <tr>
            <th>Commander Name</th>
            <th>Colors</th>
            <th>Theme</th>
            <th>Nickname</th>
            <th>Identity</th>
            <th>Image</th>
            <th>Double Sided/Background</th>
          </tr>
        </thead>
        <tbody>
          {commanderDecks.map((commander, index) => {
            return (
            <CommanderRow 
              key={commander.image1}
              odd={index % 2 === 0}
              commander={commander.commander}
              colors={commander.colors}
              image1={commander.image1}
              image2={commander.image2}
              theme={commander.theme}
              nickname={commander.nickname}
              identity={commander.identity}
              doubleSided={commander.doubleSided}
              hasBackground={commander.hasBackground}
              />
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default App;