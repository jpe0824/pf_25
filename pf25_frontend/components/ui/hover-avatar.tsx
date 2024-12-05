
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const HoverAvatar: React.FC<{ src: string; hoverSrc: string }> = ({
  src,
  hoverSrc,
}) => {
  return (
    <Avatar className="group">
      <div className="relative w-full h-full overflow-hidden rounded-full">
        <AvatarImage src={src} className="group-hover:opacity-0" />
        <AvatarImage
          src={hoverSrc}
          className="opacity-0 group-hover:opacity-100"
        />
      </div>

      <AvatarFallback>JE</AvatarFallback>
    </Avatar>
  );
};
