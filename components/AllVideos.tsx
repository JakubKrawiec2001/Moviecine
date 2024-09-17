"use client";

import { VideoType } from "@/types";
import YouTube from "react-youtube";

type Props = {
  videos: VideoType[];
};

const AllVideos = ({ videos }: Props) => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl 2lg:text-3xl xl:text-4xl font-bold border-l-4 border-mainPink-1 pl-2">
        Trailers
      </h2>
      <div className="flex flex-col md:flex-row gap-4">
        {videos?.slice(0, 2).map((video) => {
          return (
            <div key={video.id} className="md:w-full 2lg:w-1/2 aspect-video">
              <YouTube
                videoId={video.key}
                opts={{ height: "350px", width: "100%" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllVideos;
