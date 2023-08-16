import { useEffect, useState } from "react";
import { getAudio } from "../network/ApiService";


export default function Video({video}) {

  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState(''); 

  useEffect(() => {
    const func = async () => {
    	setIsLoading(true);
      const response = await getAudio(video.id);
      
      if(response !== undefined) {
        setUrl(response.url);
      }
      setIsLoading(false);
    }
    func();
  }, [video.id]);

    return (
        <div className="card w-full glass my-4 shadow-2xl">
        <figure>
          <img src={video.thumbnailUrl} alt="car!" className="w-[120px] h-[90px]"/>
        </figure>
          <div className="card-body">
            <h2 className="card-title">{video.title}</h2>
            <div className="card-actions justify-end">
                { isLoading ? <span className="loading loading-bars loading-sm"></span> : <audio className="w-full" src={url} controls loop></audio> }    
            </div>
          </div>
        </div>
    );
}
