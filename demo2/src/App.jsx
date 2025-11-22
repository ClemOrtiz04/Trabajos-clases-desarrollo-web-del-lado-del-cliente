import Tabla from './Tabla'
function App() {

  const clientes = [
    {
      id: 123,
      nombre: 'Juan Perez',
      telefono: '6677112233'
    },
    {
      id: 456,
      nombre: 'Maritza Patrick',
      telefono: '6672849123'
    },
    {
      id: 789,
      nombre: 'Popo Katepet',
      telefono: '6637849211'
    }
  ]

  return (
    <>
      <div className="container">
        <Tabla data = { clientes }/>
      </div>
    </>
  )
}

export default App
