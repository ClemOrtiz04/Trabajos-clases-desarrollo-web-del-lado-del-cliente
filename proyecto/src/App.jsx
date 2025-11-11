import Nav from './Nav'
import Materia from './Materia'

function App() {
  return (
    <>
      <Nav />
      <Materia materia={'Desarrollo web'} maestro = {'Juan Perez'} horario = {'7:40-8:20'} />
    </>
  )
}

export default App
