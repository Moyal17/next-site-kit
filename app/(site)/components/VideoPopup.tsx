"use client"
import { FiPlay } from 'react-icons/fi'
import { useState } from "react";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import ImageFallback from "@/app/components/ImageFallback";

interface VideoPopUpProps {
  id: string,
  thumbnail: string,
  width?: number | undefined,
  height?: number | undefined
}
const VideoPopup: React.FC<VideoPopUpProps> = ({ id, thumbnail, width = 700, height = 394 }) => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="animate relative  flex overflow-hidden rounded-2xl">
      {showPopup ? (
        <div>
          <LiteYouTubeEmbed id={id} title="YouTube Embed" />
        </div>
      ) : (
        <div className="relative inline-block w-full">
          <ImageFallback
            className="w-full"
            src={thumbnail}
            width={width}
            height={height}
            alt=""
          />
          <button
            onClick={() => setShowPopup(true)}
            className="intro-play-btn absolute top-1/2 left-1/2 inline-flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-2xl text-body lg:h-[90px] lg:w-[90px]">
            <FiPlay size={32} />
          </button>
        </div>
      )}
    </div>
  );
}

export default VideoPopup;
