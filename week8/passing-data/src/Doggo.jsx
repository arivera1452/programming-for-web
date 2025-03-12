export function Doggo({dog, setFav}) {
  
    return(
        <p>{dog} <button onClick={() => {
            setFav(dog);
        }}>Is my Favorite</button></p>
    )
}