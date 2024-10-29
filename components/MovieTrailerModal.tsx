import { VideoType } from "@/types";
import YouTube, { YouTubeEvent } from "react-youtube";
import { IoIosCloseCircle } from "react-icons/io";
import { useEffect, useRef } from "react";
type Props = {
  videos: VideoType[];
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MovieTrailerModal = ({ videos, isOpen, setIsOpen }: Props) => {
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (!isOpen && playerRef.current) {
      playerRef.current.pauseVideo();
    }
  }, [isOpen]);
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } fixed top-0 left-0 bottom-0 right-0 bg-[#000000da] h-screen w-full flex items-center justify-center z-[1000]`}
    >
      {videos?.slice(0, 1).map((video) => {
        console.log(video);
        return (
          <div
            key={video.id}
            className="relative w-[90%] h-1/2 md:w-[50%] md:aspect-video"
          >
            <IoIosCloseCircle
              className="absolute -top-[15%] md:-top-[5%] -right-[5%] text-4xl cursor-pointer hover:text-mainPink-2 transition-colors"
              onClick={() => setIsOpen(false)}
            />
            <div className="absolute top-0 left-0 w-full h-full ">
              {" "}
              <YouTube
                videoId={video.key}
                className="w-full h-full" 
                iframeClassName="w-full h-full" 
                onReady={(event: YouTubeEvent) => {
                  playerRef.current = event.target;
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieTrailerModal;
