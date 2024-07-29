import {useState} from 'react'
import './App.css'
import {Routes, route } from 'react-router-dom'
import Listagem from './pages/listagem';

const App = () =>  {

  const [color] = useState("#0000ff")
  document.body.style.backgroundcolor = color

  return (
  <Routes>
    <Route path="/" element={<listagem />}/>
  </Routes>
  )
}

export default App;