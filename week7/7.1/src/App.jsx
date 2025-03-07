import Camelid from './components/Camelid.jsx';
import Llama from './assets/llama.jpg';
import Alpaca from './assets/alpaca.jpg'

function App() {
  const llamas = {
    name: 'Llama',
    image: Llama,
    fact: 'A llama can carry as much as 200 pounds for 12 hours a day, but are not ridden.'
  };
  const alpacas = {
    name: 'Alpaca',
    image: Alpaca,
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