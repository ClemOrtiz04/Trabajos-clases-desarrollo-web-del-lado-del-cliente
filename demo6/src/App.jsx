import { useState, useEffect } from 'react'


function App() {
  const [data, setData] = useState([]) //Array para la inf de paises

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,flags')
    .then((res) => res.json())
    .then((result) => setData(result))
  }, []); //Ejecutar solo la primera vez que se crea el componente

  return (
    <>
      <div className="container mt-3">
        <h1 className='display-1'>Ejemplo de UseEffect en React</h1>
        <ul className='list-group mt-4'>
          {
            data.map((item) => (
              <li className='list-group-item' key={ item }>{ item.name.common }</li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default App
