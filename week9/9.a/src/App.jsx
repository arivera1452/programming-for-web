import { useState } from 'react';
import './App.css';
import Masthead from './Masthead/Masthead';
import ItemCard from './ItemCard/ItemCard';
import {nanoid} from "nanoid";
import { NewCommanderForm } from './NewCommanderForm/NewCommanderForm';


function App() {
  const [decks, setDecks] = useState([
    {
      commander: "Elesh Norn // The Argent Etchings",
      colors: ["white"],
      theme: "Phyrexians",
      nickname: "Elesh Mom",
      identity: "Mono-white",
      image: "./norn.webp",
      id: "1"
    },
    {
      commander: "Aurelia, The Law Above",
      colors: ["white", "red"],
      theme: "Forced Combat",
      nickname: "Aurelia's Fury",
      identity: "Boros",
      image: "./aurelia.webp",
      id: "2"
    },
    {
      commander: "Mishra, Eminent One",
      colors: ["blue", "black,", "red"],
      theme: "Retro Border Artifacts",
      nickname: "Mishra's Retro Artifactory",
      identity: "Grixis",
      image: "./mishra.webp",
      id: "3"
    },
    {
      commander: "Erinis, Gloom Stalker & Scion of Halaster",
      colors: ["black", "green"],
      theme: "Graveyard Landfall",
      nickname: "Life from the Loam",
      identity: "Golgari",
      image: "./erinis.webp",
      id: "4"
    },
    {
      commander: "Huatli, Poet of Unity",
      colors: ["white", "red", "green"],
      theme: "Dinosaurs",
      nickname: "Huatli, The Dino Poet",
      identity: "Naya",
      image: "./huatli.webp",
      id: "5"
    },
    {
      commander: "Taeko, the Patient Avalanche",
      colors: ["blue", "black"],
      theme: "Ninjas",
      nickname: "Hero on a Half Shell",
      identity: "Dimir",
      image: "./taeko.webp",
      id: "6"
    }
  ]);
  function addCommanderDeck(data) {
    // do stuff with data to add  a commander deck
    // taking existing commander decks and spreading a new deck to it {...}
    console.log("data", data);
    const newId = nanoid(6);
    const newDeck = {...data, id: newId};
    console.log(newDeck);
    setDecks([...decks, newDeck])
  }
  function deleteCard(id) {
    console.log("delete", id);
    const updatedArray = decks.filter((commanderDeck) => {
      return commanderDeck.id !== id;
    })
    setDecks(updatedArray)
  }
  function duplicateCard(id) {
    console.log("duplicate", id)
    const matchingDeck = decks.find((commanderDeck) => {
      return commanderDeck.id === id
    });
    const updatedDeck = {...matchingDeck, id: nanoid()}
    setDecks([...decks, updatedDeck]);
  }

  return (
    <div className='page'>
      {/* Masthead goes here */}
      <Masthead />
      <div className="collection">
        {/* deck map goes here */}
        {/* use ItemCard compoonent in loop */}
        {decks.map((commanderDeck) => {
          return(
            <ItemCard 
            key={commanderDeck.id}
            deleteFn={deleteCard}
            duplicateFn={duplicateCard}
            {...commanderDeck} />
          )
        })}
      </div>
      <NewCommanderForm addCommanderFn={addCommanderDeck} />
    </div>
  )
}

export default App
