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
