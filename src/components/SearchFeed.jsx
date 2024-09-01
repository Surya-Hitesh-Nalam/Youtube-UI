import React from 'react'
import { useState,useEffect } from 'react'
import {Box,Typography} from '@mui/material'
import Videos from './Videos'
import { fetchFromAPI } from './utils/fetchFromAPI'
import {useParams} from 'react-router-dom';




const SearchFeed = () => {
  const [videos,setVideos] = useState(null)
  const {searchTerm} = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data?.items))
      .catch((error) => {
        console.error('Error fetching videos:', error);
      });
  }, [searchTerm]);


  return (
    <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2,width:'100%'}} >
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:'white'}}>
          Search Result For:
          <span style={{color:'#f31503'}}>{searchTerm}</span> videos
        </Typography>

        <Videos videos={videos}/>
      </Box>
  )
}

export default SearchFeed