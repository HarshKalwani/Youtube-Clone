import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box, Typography } from "@mui/material"
import { fetchFromAPI } from '../utils/fetchFromAPI'
import Videos from './Videos';
import ChannelCard from "./ChannelCard";


const ChannelDetail = () => {
  // console.log(videos)

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([])

  const { id } = useParams();

  // console.log(ChannelDetail , videos)


  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items))
  }, [id])


  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{ background: 'linear-gradient(90deg, rgba(192,242,239,1) 6%, rgba(187,221,221,1) 43%, rgba(232,179,236,1) 100%)', zIndex: 10, height: '300px' }}>
        </div>
        <ChannelCard channelDetail={channelDetail} marginTop="-110px"/>
      </Box>

      <Box display='flex'  p="2">
        <Box sx={{mr:{sm:'100px'}}} />
          <Videos videos={videos}/>
      </Box>

    </Box>
  )
}

export default ChannelDetail