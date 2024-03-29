import { useEffect, useState } from 'react';
import './VideoContainer.scss';
import { YOUTUBE_VIDEOS_API } from '../../utils/constants';
import VideoCard from '../VideoCard/VideoCard';
import { useSelector } from 'react-redux';
import Shimmer from '../Shimmer/Shimmer';
import { Link } from 'react-router-dom';
import Error from '../Error/Error';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  useEffect(() => {
    getVideos();
  },[]);


  // useProgress();

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      setVideos(json.items);
    } catch(e) {
      setVideos({error: true})
    }
  }

  if(videos.length === 0) return (
    <div className="video-container"
    style={{gridTemplateColumns: isMenuOpen ? 'repeat(auto-fill, minmax(350px, 1fr))' : 'repeat(auto-fill, minmax(300px, 1fr))'}}
    >
      {Array.from({length: 20}).map((data, index) => <Shimmer key={index} />)}
    </div>
  )
 
  if(videos?.error) return <Error />

  return (
    <div 
      className="video-container"
      style={{gridTemplateColumns: isMenuOpen ? 'repeat(auto-fill, minmax(350px, 1fr))' : 'repeat(auto-fill, minmax(300px, 1fr))'}} 
    >
        {videos.map((data) => (
          <Link key={data.id} to={`/watch?v=${data.id}`} >
            <VideoCard info={data} />
          </Link>
        ))}
        {Array.from({length: 7}).map((data, index) => <Shimmer key={index} />)}
    </div>
  )
}

export default VideoContainer;