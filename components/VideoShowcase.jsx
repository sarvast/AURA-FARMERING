import { useState } from 'react';
import VideoGrid from './VideoGrid';

const VideoShowcase = () => {
  const [videos] = useState([
    {
      src: 'https://youtu.be/5C7Pkk8w9Uk',
      poster: '/explore the laddakh thumbnail.jpg',
      title: ''
    },
    {
      src: '/video2.mp4',
      poster: '/thumb2.jpg',
      title: 'Instagram Reel 2'
    },
    {
      src: '/video3.mp4',
      poster: '/thumb3.jpg',
      title: 'YouTube Short 3'
    }
  ]);

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Video Portfolio</h2>
        <VideoGrid videos={videos} />
      </div>
    </section>
  );
};

export default VideoShowcase;