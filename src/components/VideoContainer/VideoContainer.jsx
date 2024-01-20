import { useEffect, useState } from 'react';
import './VideoContainer.scss';
import { YOUTUBE_VIDEOS_API } from '../../utils/constants';
import VideoCard from '../VideoCard/VideoCard';
import { useSelector } from 'react-redux';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  useEffect(() => {
    // getVideos();
  },[]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  }

  if(videos.length === 0) {

  }
 
  return (
    <div 
      className="video-container"
      style={{gridTemplateColumns: isMenuOpen ? 'repeat(auto-fill, minmax(350px, 1fr))' : 'repeat(auto-fill, minmax(300px, 1fr))'}} 
    >
        {videos.map((data) => (
          <VideoCard key={data.id} info={data} />
        ))}
    </div>
  )
}

export default VideoContainer;