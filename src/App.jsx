import { useEffect, useRef, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Video from './components/Video';
import BottomBar from './components/BottomBar';
import { getVideos } from './network/ApiService';
import LoadingBar from './components/LoadingBar';

export default function App() {
  const [theme, setTheme] = useState("");
  const [loading, setLoading] = useState(false);
  const [videosList, setVideosList] = useState([]);
  const inputReference = useRef();
  
  const onButtonClick = async (text) => {
    try {
      setLoading(true);
      const videos = await getVideos(text);
      inputReference.current.value = "";
      setLoading(false);
      setVideosList(videos);
    } catch {
      console.error("Network Error");
    }
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme !== undefined) {
      setTheme(savedTheme);
    }
  });
    
  return (
    <div data-theme={theme} className='flex flex-col w-screen h-screen bg-base-100'>
      <NavBar currentTheme={theme} setCurrentTheme={setTheme}/>

      <div className='flex overflow-y-auto mt-1 mb-8'>
        <div className='w-full mb-8'>
          { loading ? <LoadingBar/> : videosList.map((value, index, arr) => <Video key={index} video={value}/>) }         
        </div>
      </div>

      <BottomBar inputRef={inputReference} clickListener={onButtonClick}/>
    </div>
    
  );
}