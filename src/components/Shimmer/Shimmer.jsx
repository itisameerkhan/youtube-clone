import { Skeleton } from '@mui/material';
import './Shimmer.scss';

const Shimmer = () => {
  return (
    <div className="shimmer">
        <Skeleton variant='rounded' width={400} height={225} style={{ backgroundColor: '#3F3F3F', borderRadius: '10px', maxWidth:'100%', maxHeight:'auto'}} />
        <div className="shimmer-lw">
            <Skeleton variant='circular' height={36} width={36} style={{ backgroundColor: '#3F3F3F'}}  />
            <div>
            <Skeleton variant='rounded' height={18} width={316} style={{ backgroundColor: '#3F3F3F'}}  />
            <Skeleton variant='rounded' height={18} width={215} style={{ backgroundColor: '#3F3F3F'}}  />
            </div>
        </div>
    </div>
  )
}

export default Shimmer;