import{useState} from "react";

function App() {
  const [count, setCount] = useState(0)

  function HandleClick(){
    setCount(count + 1);
  }
  function HandleClickMinus(){
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <h1>Manejo del estado en react</h1>
      <button onClick={HandleClick}>Incrementar</button>
      {count > 0 && <button onClick={HandleClickMinus}>Decrementar</button>}
      <span>Contador: {count}</span>
    </>
  )
}

export default App
