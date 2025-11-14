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
          title: "Explore the Ladakh",
          thumbnail: "/explore-the-laddakh-thumbnail.jpg",
          videoUrl: "/explore-the-laddakh.mp4",
          isLocalVideo: true,
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
                    
                    <div className="absolute bottom-3 xs:bottom-4 left-3 xs:left-4 right-3 xs:right-4 bg-black/50 rounded px-2 py-1">
                      <p className="text-white font-semibold text-xs xs:text-sm truncate">{video.title}</p>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={video.videoUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="block w-full h-full"
                  >
                    {/* thumbnail */}
                    <div className="relative w-full h-full">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* overlay gradient */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-all duration-300"
                      aria-hidden
                    />

                    {/* play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                        <div className="w-0 h-0 border-l-[14px] xs:border-l-[16px] sm:border-l-[20px] border-l-white border-t-[8px] xs:border-t-[10px] sm:border-t-[12px] border-t-transparent border-b-[8px] xs:border-b-[10px] sm:border-b-[12px] border-b-transparent ml-1"></div>
                      </div>
                    </div>

                    {/* title */}
                    <div className="absolute bottom-3 xs:bottom-4 left-3 xs:left-4 right-3 xs:right-4">
                      <p className="text-white font-semibold text-xs xs:text-sm truncate">{video.title}</p>
                    </div>
                  </Link>
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
