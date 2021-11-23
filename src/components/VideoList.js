import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {

    const videos = props.videos.map((item) =>
        <VideoItem key={item.id.videoId} onVideoSelect={props.onVideoSelect} video={item}></VideoItem>
    )

    return (<div className="ui relaxed divided list"> {videos} </div>);
}

export default VideoList;