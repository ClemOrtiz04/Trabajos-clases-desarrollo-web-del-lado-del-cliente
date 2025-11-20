import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Mision from './Mision'
import Vision from './Vision'
import Home from './Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <Link to = '/' className='navbar-brand'> Home </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link to = '/mision' className='nav-link'>Mision</Link>
                <Link to = '/vision' className='nav-link'>Vision</Link>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element= { <Home /> } />
          <Route path='/mision' element = { <Mision /> } />
          <Route path='/vision' element = { <Vision /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
