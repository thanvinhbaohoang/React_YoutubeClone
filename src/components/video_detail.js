import React from 'react';

function VideoDetail({ video }) {
  if (!video) {
    return <div>Loading...</div>;
  }
  const { videoId } = video.id;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div id="video-detail">
      <iframe src={url} title="video-detail" />
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
}

export default VideoDetail;
