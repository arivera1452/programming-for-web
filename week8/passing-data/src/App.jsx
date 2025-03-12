import { useState } from "react";
import { Doggo } from "./Doggo";
function App() {
  const doggos = [
    "Monty",
    "Jersey",
    "Kirby",
    "Freya",
    "Tessa",
    "Lassie"
  ]
  const [favDog, setFavDog] = useState(doggos[0])
  function setFavoriteDoggo(dogToSet) {
    setFavDog(dogToSet);
  }
  return (
    <div>
      <div>{favDog} is my Favorite</div>
      <hr />
      {doggos.map((dog, index) => {
        return <Doggo key={index} dog={dog} setFav={setFavoriteDoggo}/>
      })}
    </div>
  )
}

export default App
