import { useRef, useState } from 'react';
import NavBar from './NavBar';
import Video from './Video';
import BottomBar from './BottomBar';
import { getVideos } from '../network/ApiService'
import LoadingBar from './LoadingBar';

export default function Home() {
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
    
  return (
    <div className='flex flex-col w-screen h-screen bg-base-100'>
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
