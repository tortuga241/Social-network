import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Registr from './UI/pages/registr.jsx';
import UserProfile from './UI/pages/UserProfile.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
          <Route path='/' element={<UserProfile />} />
          <Route path='/register' element={<Registr />}/>
      </Routes>
    </div>
  )
}

export default App;
