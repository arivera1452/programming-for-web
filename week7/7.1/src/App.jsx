import Camelid from './components/Camelid.jsx';

function App() {
  const llamas = {
    name: 'Llama',
    image: "./llama.jpg",
    fact: 'A llama can carry as much as 200 pounds for 12 hours a day, but are not ridden.'
  };
  const alpacas = {
    name: 'Alpaca',
    image: "./alpaca.jpg",
    fact: 'Alpacas are highly sociable, gentle and curious.'
  };

  return(
    <div>
      <h2>Camelids</h2>
        <Camelid image={llamas.image} name={llamas.name} fact={llamas.fact}/>
        <Camelid image={alpacas.image} name={alpacas.name} fact={alpacas.fact}/>
    </div>
  )
}

export default App;