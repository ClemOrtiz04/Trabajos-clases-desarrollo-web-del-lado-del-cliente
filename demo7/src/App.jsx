import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,latlng,maps,timezones,continents')
    .then((res) => res.json())
    .then((result) => setData(result))
  }, []); //Ejecutar solo la primera vez que se crea el componente


  return (
    <>
      <div className="container mt-3">
        <h1 className='display-1'>Ejemplo de UseEffect en React</h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name and population</th>
              <th scope="col">Official nameg</th>
              <th scope="col">LatLng</th>
              <th scope="col">Maps</th>
              <th scope="col">Timezones</th>
            </tr>
          </thead>
          <tbody>
              {
                data.map((item) => (
                  <tr key = { item.name.common }>
                    <td> { item.name.common } - { item.population} </td>
                    <td> { item.name.official }</td>
                    <td> { item.latlng }</td>
                    <td> { item.maps.googleMaps }</td>
                    <td> { item.timezones }</td>
                  </tr>
                ))
              }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
