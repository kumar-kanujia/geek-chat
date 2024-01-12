import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface UserAvatarProps {
  fallback: string;
  src?: string;
  className?: string;
}

const UserAvatar = ({ src, className, fallback }: UserAvatarProps) => {
  return (
    <Avatar className={cn("h-7 w-7 md:h-10 md:w-10", className)}>
      <AvatarImage src={src} />
      <AvatarFallback>{fallback.substring(0, 2)}</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
