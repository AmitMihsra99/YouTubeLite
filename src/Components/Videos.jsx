import React from 'react'
import {Stack,Box} from '@mui/material';
import VideoCard  from './VideoCard';
import ChannelCards from './ChannelCards';
//const hello="amit"
const Videos = ({videos,direction}) => {
 // console.log(videos);
  
  if(!videos?.length) return 'Loading....';
 return (
    <Stack direction={direction||"row" } flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      { 
        videos&&videos.map((item,idx)=>(
         <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}  
            {item.id.channelId  && <ChannelCards channelDetail={item} />}
         </Box>
      ))}
   
    </Stack>
  )
}

export default Videos
