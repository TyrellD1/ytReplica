import React from 'react';

const VideoItem = ({ video }) => {
    if(!video) {
        return (
        <div className="videoContainer starterVideoContainer d-flex flex-column">
            <div className="ui myLoaderContainer segment my-auto">
                <div className="ui myLoader active dimmer">
                    <div className="ui text loader">Select a Video</div>
                </div>
                <p></p>
            </div>
        </div>
        )
    }   
    return(
        <div className="videoContainer d-flex flex-column">
            <iframe className="videoIframe" src={'https://www.youtube.com/embed/' + video.id.videoId}></iframe>
            <div>
                <h2 className="videoTitle mt-2">{video.snippet.title}</h2>
                <p className="videoDescription">{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoItem;