import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Settings from './components/Settings';

export default function App() {
    
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/settings' element={ <Settings/> }/>
      </Routes>
    </BrowserRouter>
  );
}
