import {Link} from "react-router-dom";
import { Typography, Card, CardContent, CardMedia} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoThumbnailUrl, demoVideoTitle, demoVideoUrl, demoChannelTitle, demoChannelUrl } from "../utils/constants";

const VideoCard = ({video : {id : {videoId}, snippet } }) => {
  return (
    <Card sx={{width:{ xs:"100%", sm:"250px",md:"330px",}, boxShadow: "none", borderRadius:"0px"}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
        sx={{width:{xs : "100%", sm:"250px", md:"330px"}, height:130}}/>
        </Link>
        <CardContent sx={{ backgroundColor:"#1e1e1e", height : "90px"}} >
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography variant="subtitle1" fontWeight="400" color="#fff"> {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}</Typography>
            </Link>

            <Link to={snippet.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                <Typography variant="subtitle2" fontWeight="500" color="grey"> {snippet?.channelTitle || demoChannelTitle}
                <CheckCircle sx={{fontSize:12, color:"grey", ml:"5px"}}/>
                </Typography>
            </Link>
        </CardContent>
    </Card>
)
}

export default VideoCard