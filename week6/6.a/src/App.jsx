function App() {
  const llamaFacts = ['like cattle and sheep, llamas chew their cud.', 'they tell their companions off by spitting at them.', 'llama language is humming.', 'Llamas live in the Andean highland plateaus covered in low vegetation'];
  let llama = 2;

  return (
    <div>
      <h1>Llama Facts 101</h1>
      <ul>
        <li>Much {llamaFacts[0]}</li>
        <li> Often times after chewing their cud if another llama is annoying them {llamaFacts[1]}</li>
        <li>The official {llama > 1 ? llamaFacts[2] : 'not llama'}</li>
        <li>{llamaFacts[3]}</li>
      </ul>   
    </div>
  )
}

export default App
