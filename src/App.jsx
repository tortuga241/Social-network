import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Registr from './UI/pages/registr.jsx';
import UserProfile from './UI/pages/UserProfile.jsx';
import ForgotPassword from './UI/components/ForgotPasswordPage/FofgotPasswordPage.jsx';
import CreateNewPasswordPage from './UI/components/ForgotPasswordPage/CreateNewPasswordPage.jsx';
import NewsPage from './UI/pages/NewsPage.jsx';
import Music from './UI/pages/Music.jsx';
import ConfirmEmail from './UI/pages/confirmEmail.jsx'
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserProfile />} />
      <Route path="/confirmEmail" element={<ConfirmEmail />} />
      <Route path="/recoveryToken/:token" element={<CreateNewPasswordPage />} />
      <Route path="/register" element={<Registr />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/createNewPasswordPage" element={<CreateNewPasswordPage />} />
      <Route path="/feed" element={<NewsPage />} />
      <Route path="/music" element={<Music />} />
    </Routes>
  );
}

export default App;