import {useState} from 'react';
import Tareas from './Tareas'


function App() {
  const [text, setText] = useState('')
  const [tasks, setTasks] = useState(['Estudiar', 'Jugar', 'Limpiar']);

  function handleText (element) {
    setText(element.target.value);
  }

  function handleAdd () {
    setTasks([...tasks, text]); //... Copiar el arreglo ya implementado y añadir un nuevo elemento
  }

  return (
    <>
      <input placeholder='Proporcione una tarea:' 
        type="text" value={ text } onChange={ handleText}/>
      <button onClick={ handleAdd }>Agregar</button>
      <Tareas data = { tasks } />
    </>
  )
}

export default App
