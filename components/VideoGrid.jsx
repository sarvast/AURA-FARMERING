import VideoPlayer from './VideoPlayer';

const VideoGrid = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video, index) => (
        <VideoPlayer
          key={index}
          src={video.src}
          poster={video.poster}
          title={video.title}
        />
      ))}
    </div>
  );
};

export default VideoGrid;