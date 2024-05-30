import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Registr from './UI/pages/registr.jsx';
import UserProfile from './UI/pages/UserProfile.jsx';
import ForgotPassword from './UI/components/ForgotPasswordPage/FofgotPasswordPage.jsx';
import CreateNewPasswordPage from './UI/components/ForgotPasswordPage/CreateNewPasswordPage.jsx';
import NewsPage from './UI/pages/NewsPage.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
          <Route path='/' element={<UserProfile />} />
          <Route path='/register' element={<Registr />}/>
          <Route path='/forgotPassword' element={<ForgotPassword/>}/>
          <Route path='/createNewPasswordPage' element={<CreateNewPasswordPage/>}/>
          <Route path='/feed' element={<NewsPage/>} />
      </Routes>
    </div>
  )
}

export default App;