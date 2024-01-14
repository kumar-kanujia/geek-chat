import { Separator } from "@/components/ui/separator";
import DirectMessageAction from "./DirectMessageAction";
import ThemeToggle from "./ThemeToggle";
import CreateServerAction from "./CreateServerAction";
import UserSettingsAction from "./UserSettingsAction";
import { dummyphotos } from "@/data/constants";
import MenuItem from "./MenuItem";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BsDiscord } from "react-icons/bs";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const SideMenu = async () => {
  const servers = await dummyphotos();
  return (
    <div className="space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] bg-[#E3E5E8] py-3">
      <DirectMessageAction />
      <Separator className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto" />
      <ScrollArea className="flex-1 w-full" hideScrollbar>
        {servers.map((server, index) => (
          <div key={index} className="mb-4 flex justify-center">
            <MenuItem
              key={index}
              href="/"
              image={{ url: server, alt: "image" }}
              tooltipContent="Name"
            />
          </div>
        ))}
      </ScrollArea>
      <div className="pb-3 mt-auto flex items-center flex-col gap-y-4">
        <Separator className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto" />
        <ThemeToggle />
        <CreateServerAction />
        <UserSettingsAction />
      </div>
    </div>
  );
};

const SideMenuSkeleton = () => {
  return (
    <div className="space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] bg-[#E3E5E8] py-3">
      <MenuItem.Skeleton
        isActive
        className="mx-auto mb-2 flex items-center justify-center bg-primary text-white"
      >
        <BsDiscord fontSize={26} />
      </MenuItem.Skeleton>
      <Separator className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto" />
      <ScrollArea className="flex-1 w-full" hideScrollbar>
        {[...Array(11)].map((_, index) => (
          <div key={index} className="mb-4 flex justify-center">
            <Skeleton className={cn("h-12 w-12")} />
          </div>
        ))}
      </ScrollArea>
      <div className="pb-3 mt-auto flex items-center flex-col gap-y-4">
        <Separator className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto" />
        <ThemeToggle />
        <CreateServerAction />
        <UserSettingsAction />
      </div>
    </div>
  );
};

SideMenu.Skeleton = SideMenuSkeleton;

export default SideMenu;
