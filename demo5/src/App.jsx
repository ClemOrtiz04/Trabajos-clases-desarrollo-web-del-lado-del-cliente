import {useState} from 'react';
import Tareas from './Tareas'


function App() {
  const [text, setText] = useState('')
  const [tasks, setTasks] = useState([]);

  function handleText (element) {
    setText(element.target.value);
  }

  function handleAdd () {
    setTasks([...tasks, text]); //... Copiar el arreglo ya implementado y añadir un nuevo elemento
  }

  return (
    <>
      <div className="container mt-3">
        <div className='d-flex mb-4'>
          <input className='form-control' placeholder='Proporcione una tarea:' 
          type="text" value={ text } onChange={ handleText}/>
          <button  className ='btn btn-outline-secondary'onClick={ handleAdd }>Agregar</button>
        </div>
        
        { tasks.length > 0 &&
        <Tareas data = { tasks } />
        }
      </div>
      
    </>
  )
}

export default App
