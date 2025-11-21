import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      videos: [
        {
          title: "",
          thumbnail: "/explore the laddakh thumbnail.jpg",
          videoUrl: "https://www.youtube.com/embed/5C7Pkk8w9Uk?rel=0&modestbranding=1&hd=1&vq=hd1080&quality=hd1080&autoplay=0&controls=1&showinfo=0",
          isLocalVideo: false,
        },
      ],
    },
    {
      videos: [
        {
          title: "Instagram Reel 2",
          thumbnail: "/thumb2.jpg",
          videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2",
        },
      ],
    },
    {
      videos: [
        {
          title: "Instagram Reel 3",
          thumbnail: "/thumb3.jpg",
          videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
        },
      ],
    },
    {
      videos: [
        {
          title: "Instagram Reel 4",
          thumbnail: "/thumb4.jpg",
          videoUrl: "https://www.youtube.com/embed/VIDEO_ID_4",
        },
      ],
    },
    {
      videos: [
        {
          title: "Instagram Reel 5",
          thumbnail: "/thumb1.jpg",
          videoUrl: "https://www.youtube.com/embed/VIDEO_ID_5",
        },
      ],
    },
    {
      videos: [
        {
          title: "Instagram Reel 6",
          thumbnail: "/thumb2.jpg",
          videoUrl: "https://www.youtube.com/embed/VIDEO_ID_6",
        },
      ],
    },
    {
      videos: [
        {
          title: "Instagram Reel 7",
          thumbnail: "/thumb3.jpg",
          videoUrl: "https://www.youtube.com/embed/VIDEO_ID_7",
        },
      ],
    },
    {
      videos: [
        {
          title: "Instagram Reel 8",
          thumbnail: "/thumb4.jpg",
          videoUrl: "https://www.youtube.com/embed/VIDEO_ID_8",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={16}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      loop={true}
      modules={[Navigation, Pagination]}
      className="h-[500px] xs:h-[550px] sm:h-[600px] md:h-[650px] lg:h-[700px] xl:h-[750px] 2xl:h-[800px] pb-16"
      style={{ paddingBottom: '64px' }}
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="flex items-center justify-center h-full">
            {slide.videos.map((video, videoI) => (
              <div
                className="relative rounded-lg overflow-hidden group w-full max-w-[220px] xs:max-w-[240px] sm:max-w-[280px] md:max-w-[300px] lg:max-w-[320px] xl:max-w-[340px] 2xl:max-w-[380px] mx-auto shadow-xl video-card"
                key={videoI}
                style={{ aspectRatio: video.isLocalVideo ? '16/9' : '9/16' }}
              >
                {video.isLocalVideo ? (
                  <div className="block w-full h-full relative">
                    <video 
                      src={video.videoUrl}
                      controls
                      className="w-full h-full object-cover"
                      poster={video.thumbnail}
                      preload="metadata"
                      onError={(e) => console.error('Video error:', e)}
                      onLoadStart={() => console.log('Video loading started')}
                    >
                      <source src={video.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <div className="block w-full h-full relative">
                    <iframe
                      src={video.videoUrl}
                      title={video.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
