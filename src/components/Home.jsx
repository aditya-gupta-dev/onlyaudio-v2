import { useRef, useState } from 'react';
import NavBar from './NavBar';
import Video from './Video';
import BottomBar from './BottomBar';
import { getVideos, getVideosWithMaxResults } from '../network/ApiService'
import LoadingBar from './LoadingBar';

export default function Home({currentTheme, setCurrentTheme}) {
  const [loading, setLoading] = useState(false);
  const [videosList, setVideosList] = useState([]);
  const inputReference = useRef();
  
  const onButtonClick = async (text) => {
      inputReference.current.value = "";
      setLoading(true);
      
      const savedMaxResults = localStorage.getItem("maxResults");

      if(savedMaxResults === undefined) {
        const videos = await getVideos(text);
        setLoading(false);
        setVideosList(videos);
      } else {
        const videos = await getVideosWithMaxResults(text, savedMaxResults);
        setLoading(false);
        setVideosList(videos);
      }
  }
    
  return (
    <div data-theme={currentTheme} className='flex flex-col w-screen h-screen bg-base-100'>
      <NavBar/>

      <div className='flex overflow-y-auto mt-1 mb-8'>
        <div className='w-full mb-8'>
          { loading ? <LoadingBar/> : videosList.map((value, index, arr) => <Video key={index} video={value}/>) }         
        </div>
      </div>

      <BottomBar inputRef={inputReference} clickListener={onButtonClick}/>
    </div>
    
  );
}
