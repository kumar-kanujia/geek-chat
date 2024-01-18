"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  FaChevronDown,
  FaChevronUp,
  FaCog,
  FaPlusCircle,
  FaPowerOff,
  FaTrash,
  FaUserPlus,
  FaUsers,
} from "react-icons/fa";
import { MemberRole } from "@prisma/client";
import { FC, useState } from "react";
import Link from "next/link";

type ServerHeaderProps = {
  serverId: string;
  serverName: string;
  userRole: (typeof MemberRole)[keyof typeof MemberRole];
};

const ServerHeader: FC<ServerHeaderProps> = ({
  serverName,
  userRole,
  serverId,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isAdmin = userRole === MemberRole.ADMIN;
  const isModerator = isAdmin || userRole === MemberRole.MODERATOR;

  return (
    <DropdownMenu onOpenChange={() => setIsDropdownOpen((prev) => !prev)}>
      <DropdownMenuTrigger className="focus:outline-none" asChild>
        <button className="text-md flex h-12 w-full items-center truncate border-b-2 border-neutral-200 px-3 font-semibold text-primary-foreground transition hover:bg-zinc-700/10 dark:border-neutral-800 dark:hover:bg-zinc-700/50">
          {serverName}
          {isDropdownOpen ? (
            <FaChevronUp className="ml-auto h-5 w-5" />
          ) : (
            <FaChevronDown className="ml-auto h-5 w-5" />
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 space-y-[2px] text-xs font-medium text-black dark:text-neutral-400">
        {isModerator && (
          <DropdownMenuItem
            className="cursor-pointer px-3 py-2 text-sm text-indigo-600 dark:text-indigo-400"
            asChild
          >
            <Link href={`/servers/${serverId}/invite`}>
              Invite People
              <FaUserPlus className="ml-auto h-4 w-4" />
            </Link>
          </DropdownMenuItem>
        )}
        {isAdmin && (
          <DropdownMenuItem className="cursor-pointer px-3 py-2 text-sm">
            Server Settings
            <FaCog className="ml-auto h-4 w-4" />
          </DropdownMenuItem>
        )}
        {isAdmin && (
          <DropdownMenuItem className="cursor-pointer px-3 py-2 text-sm">
            Manage Members
            <FaUsers className="ml-auto h-4 w-4" />
          </DropdownMenuItem>
        )}
        {isModerator && (
          <DropdownMenuItem className="cursor-pointer px-3 py-2 text-sm">
            Create Channel
            <FaPlusCircle className="ml-auto h-4 w-4" />
          </DropdownMenuItem>
        )}
        {isModerator && <DropdownMenuSeparator />}
        {isAdmin && (
          <DropdownMenuItem className="cursor-pointer px-3 py-2 text-sm text-rose-500">
            Delete Server
            <FaTrash className="ml-auto h-4 w-4" />
          </DropdownMenuItem>
        )}
        {!isAdmin && (
          <DropdownMenuItem className="cursor-pointer px-3 py-2 text-sm text-rose-500">
            Leave Server
            <FaPowerOff className="ml-auto h-4 w-4" />
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default ServerHeader;
