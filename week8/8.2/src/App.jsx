import { useState } from 'react';
import './App.css';
import DogBreed from './DogBreed';

function App() {
  const [headline, setHeadline] = useState("List of Dog Breeds");
  const [dogBreeds, setDogBreeds] = useState([
    "Golden Retriever", 
    "Labrador Retriever", 
    "German Shepherd", 
    "Bulldog", 
    "Beagle", 
    "Poodle", 
    "Rottweiler", 
    "Yorkshire Terrier", 
    "Boxer", 
    "Dachshund", 
    "Siberian Husky", 
    "Great Dane", 
    "Doberman Pinscher", 
    "Shih Tzu", 
    "Border Collie", 
    "Chihuahua", 
    "Pug", 
    "Maltese", 
    "Cocker Spaniel", 
    "Australian Shepherd"
  ]);

  function deleteDogBreed(dogBreed) {
    const updatedArray = dogBreeds.filter((dog) => {
      return dog !== dogBreed; 
    });
    setDogBreeds(updatedArray);
  }

  function focusDogBreed(dogBreed) {
    setHeadline(dogBreed);
  }

  return (
    <>
      <h1>{headline}</h1>
      {dogBreeds.map((breed) => {
        return <DogBreed
        key={breed}
        dogBreed={breed}
        deleteFn={deleteDogBreed}
        focusFn={focusDogBreed}
        />
      })}
    </>
  )
}

export default App
