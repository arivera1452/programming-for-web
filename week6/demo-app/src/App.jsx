import './App.css'
import  { Wave } from './Wave'

function App() {
  const myName = 'Andrew';
  const cars = ['Bugatti', 'Mercedes', 'Pinto']
  const myAge = 30;
  return (
    <div>
      <h1>Hello, my name is {myName}</h1>
      <p>This is react</p>
      <p>I have a {cars[1]}</p>
      <h2>Ternary</h2>
      <p>First - condition</p>
      <p>question mark + true output</p>
      <p>colon + false output</p>
      <p>{(myAge > 16) ? 'Older' : 'Younger'}</p>
      {myAge > 16 ? (<div>So Old</div>) : (<div>So Young</div>)}
      <Wave />
    </div>
  )
}

export default App
