import React from 'react'
import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Box} from '@mui/material';
import Videos  from "./Videos" 
import ChannelCard from './ChannelCards';
import {fetchFromAPI} from '../utils/fetchFromAPI';

const ChannelDetails = () => {
 
const {id}=useParams();
 
const [ChannelDetails,setChannelDetail]=useState(null)

const [videos,setVideos]=useState([]);

//console.log(ChannelDetails,videos)
  useEffect(()=>{
     fetchFromAPI(`Channel?part="snippet&id=${id}` )
      .then((data)=>setChannelDetail(data?.item[0]));

      fetchFromAPI(`search?ChannelId=${id}&part="snippet&order=data`)
      .then((data)=>setVideos(data?.item));
  },[id])
 
 return (
     <Box minHeight="95vh">
       <Box>
       <div style={{
        height:'300px',
        background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
        zIndex: 10,}}/>
        
        <ChannelCard channelDetail={ChannelDetails} marginTop="-93px" />
        </Box>
        <Box p={2} display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
          <Videos videos={videos} />
        </Box>
      </Box>   
  )
}

export default ChannelDetails
