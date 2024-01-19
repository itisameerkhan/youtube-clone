import { useEffect, useState } from 'react';
import './VideoContainer.scss';
import { YOUTUBE_VIDEOS_API } from '../../utils/constants';
import VideoCard from '../VideoCard/VideoCard';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  },[]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  }

  return (
    <div className="video-container">
        {videos.map((data) => (
          <VideoCard key={data} info={data} />
        ))}
    </div>
  )
}

export default VideoContainer;