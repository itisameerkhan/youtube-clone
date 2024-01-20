import './VideoCard.scss';
import profile from '../../assets/youtube-svgs/defaultpfp.svg';

const VideoCard = ({info}) => {

    // console.log(info);

    const formatNumbers = (num) => {
        if(num < 1000) return num;
        else if(num >= 1000 && num <= 999999) return Math.round(num/1000) + 'K';
        else if(num >= 1000000 && num <= 999999999) return Math.round(num/1000000) + 'M';
    }

    const calculateDuration = (duration) => {
        const currentDate = new Date();
        const providedDate = new Date(duration);
        const timeDifference = Math.round(new Date(currentDate - providedDate) / (1000 * 60 * 60 * 24));
        if(timeDifference == 1) return '1 day ago';
        else if(timeDifference >= 2 && timeDifference <= 31) return `${timeDifference} days ago`;
        else if(timeDifference >= 30 && timeDifference <= 61) return `1 month ago`;
        else if(timeDifference >= 60 && timeDifference <= 365) return `${Math.round(timeDifference/12)} months ago`;
        else if(timeDifference >= 365) return `${Math.round(timeDifference / 365)} years ago`; 
        return timeDifference;
    }

    return (
        <div className="video-card">
            <img 
                src={info?.snippet?.thumbnails?.maxres?.url} 
                alt="thumbnail" 
                className='thumbnail'
            />
            <div className="vc-inner">
                <img src={profile} alt="pfp" className='yt-profile' />
                <div className="vs-inner-right">
                    <p className="title">
                        {info?.snippet?.title}
                    </p>
                    <p className="chl-name">{info?.snippet?.channelTitle}</p>
                    <p className="views">{formatNumbers(info?.statistics?.viewCount)} views • {calculateDuration(info?.snippet?.publishedAt)}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;