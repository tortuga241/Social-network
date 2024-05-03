import { useState } from 'react'
// import Layout from './Layouts/layout.jsx';
import Registr from './UI/pages/registr.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Registr />
    </div>
  )
}

export default App;