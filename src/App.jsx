import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Settings from './components/Settings';

export default function App() {
  
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if(savedTheme !== undefined) {
      setTheme(savedTheme);
    } else {
      setTheme("light");
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home currentTheme={theme} setCurrentTheme={setTheme}/> }/>
        <Route path='/settings' element={ <Settings currentTheme={theme} setCurrentTheme={setTheme}/> }/>
      </Routes>
    </BrowserRouter>
  );
}
