import { useState } from 'react';

const isYouTubeUrl = (url) => {
  if (!url) return false;
  return url.includes('youtube.com') || url.includes('youtu.be');
};

const getYouTubeEmbedUrl = (url) => {
  try {
    // handle youtu.be short links
    if (url.includes('youtu.be')) {
      const id = url.split('/').pop().split('?')[0];
      return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;
    }

    // handle youtube.com links and extract v= param
    const parsed = new URL(url, 'https://example.com');
    const v = parsed.searchParams.get('v');
    if (v) return `https://www.youtube.com/embed/${v}?rel=0&modestbranding=1`;

    // fallback: return original
    return url;
  } catch (e) {
    return url;
  }
};

const VideoPlayer = ({ src, poster, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const renderVideo = () => (
    <video
      src={src}
      poster={poster}
      controls
      className="w-full h-full object-cover"
      onPlay={() => setIsPlaying(true)}
      onPause={() => setIsPlaying(false)}
    />
  );

  const renderYouTube = () => {
    const embedUrl = getYouTubeEmbedUrl(src);
    return (
      <iframe
        src={embedUrl}
        title={title || 'YouTube video'}
        className="w-full h-full"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  };

  return (
    <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
      {isYouTubeUrl(src) ? renderYouTube() : renderVideo()}
    </div>
  );
};

export default VideoPlayer;