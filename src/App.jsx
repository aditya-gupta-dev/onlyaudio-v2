import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Settings from './components/Settings';

export default function App() {
  
  const [theme, setTheme] = useState("light");

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home currentTheme={theme} setCurrentTheme={setTheme}/> }/>
        <Route path='/settings' element={ <Settings currentTheme={theme} setCurrentTheme={setTheme}/> }/>
      </Routes>
    </BrowserRouter>
  );
}
