"use client";
import { BsDiscord } from "react-icons/bs";
import MenuItem from "./MenuItem";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const DIRECT_MESSAGE_PATHNAME = "/servers/me";

const DirectMessageAction = () => {
  const pathname = usePathname();

  const isActive = pathname === DIRECT_MESSAGE_PATHNAME;
  return (
    <MenuItem
      href={DIRECT_MESSAGE_PATHNAME}
      isActive={isActive}
      tooltipContent="Direct Messages"
      className={cn(
        "mx-auto mb-2 flex items-center justify-center",
        isActive ? "bg-primary text-white" : "text-gray-300",
      )}
    >
      <BsDiscord fontSize={26} />
    </MenuItem>
  );
};
export default DirectMessageAction;
