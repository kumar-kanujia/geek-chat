"use client";
import UserAvatar from "@/components/UserAvatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { BsX } from "react-icons/bs";

type DMItemProps = {
  src?: string;
  userName: string;
  href: string;
};

const DMItem: FC<DMItemProps> = ({ userName, src, href }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <li className="list-none group">
      <Button
        className={cn(
          "text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 mb-2",

          "w-full px-2 h-10 md:h-12 flex items-center rounded-md justify-start",
          isActive && "bg-zinc-700/20 dark:bg-zinc-700"
        )}
        variant="ghost"
        asChild
      >
        <Link href={href}>
          <UserAvatar
            className="mr-2"
            fallback={userName.substring(0, 2)}
            src={src}
          />
          <div className="flex-1 truncate text-sm">{userName}</div>
          <button
            className="hidden text-gray-300 hover:text-white group-hover:block"
            onClick={() => {}}
          >
            <BsX fontSize={24} />
          </button>
        </Link>
      </Button>
    </li>
  );
};
export default DMItem;
