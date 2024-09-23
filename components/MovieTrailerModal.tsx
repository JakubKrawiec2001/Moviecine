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
        return (
          <div key={video.id} className="relative 2lg:w-1/2 aspect-video">
            <IoIosCloseCircle
              className="absolute -top-[5%] -right-[5%] text-4xl cursor-pointer hover:text-mainPink-2 transition-colors"
              onClick={() => setIsOpen(false)}
            />
            <YouTube
              videoId={video.key}
              opts={{ width: "100%" }}
              onReady={(event: YouTubeEvent) => {
                playerRef.current = event.target;
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MovieTrailerModal;
