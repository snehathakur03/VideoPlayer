import {useState, useEffect} from 'react';
import {Box, Stack, Typography} from "@mui/material";
import Sidebar from './Sidebar';
import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
   <Stack sx={{flexDirection:{xs:"column", md:"row"}}}>
    <Box sx={{ borderRight:"1px solid #3d3d3d", px:{xs:0, md:2}}}>
    <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

      <Typography className="copyright" variant="body2"
      sx={{mt:1.5, color:"#fff"}}>Copyright 2022 Meedia</Typography>
    </Box>

    <Box sx={{paddingLeft:"2rem", overflowY:"auto",height:"90vh", flex:"2"}}>
      <Typography variant="h4" fontWeight="bold" mt={1} mb={1} sx={{color:"#fff"}}>   {selectedCategory}
        <span style={{color:"#ff9101"}}> Videos</span>
      </Typography>

      <Videos videos ={videos} />
    </Box>
    
   </Stack>
  )
}

export default Feed