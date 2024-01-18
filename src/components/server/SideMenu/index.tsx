import { Separator } from "@/components/ui/separator";
import DirectMessageAction from "./DirectMessageAction";
import ThemeToggle from "./ThemeToggle";
import CreateServerAction from "./CreateServerAction";
import UserSettingsAction from "./UserSettingsAction";
import MenuItem from "./MenuItem";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BsDiscord } from "react-icons/bs";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { ServerList } from "@/loaders/server";
import ServerIcon from "./ServerIcon";
import { currentUser } from "@/lib/auth";
import { defaultAvatarImagePATH } from "@/data/constants";

type SideMenuProps = {
  servers: ServerList;
};

const SideMenu = async ({ servers }: SideMenuProps) => {
  const user = await currentUser();
  return (
    <div className="flex h-full w-full flex-col items-center space-y-4 bg-[#E3E5E8] py-3 text-primary dark:bg-[#1E1F22]">
      <DirectMessageAction />
      <Separator className="mx-auto h-[2px] w-10 rounded-md bg-zinc-300 dark:bg-zinc-700" />
      <ScrollArea className="w-full flex-1" hideScrollbar>
        {servers.map((server) => (
          <ServerIcon server={server} key={server.id} />
        ))}
      </ScrollArea>
      <div className="mt-auto flex flex-col items-center gap-y-4 pb-3">
        <Separator className="mx-auto h-[2px] w-10 rounded-md bg-zinc-300 dark:bg-zinc-700" />
        <ThemeToggle />
        <CreateServerAction />
        <UserSettingsAction userImage={user?.image || defaultAvatarImagePATH} />
      </div>
    </div>
  );
};

const SideMenuSkeleton = () => {
  return (
    <div className="flex h-full w-full flex-col items-center space-y-4 bg-[#E3E5E8] py-3 text-primary dark:bg-[#1E1F22]">
      <MenuItem.Skeleton
        isActive
        className="mx-auto mb-2 flex items-center justify-center bg-primary text-white"
      >
        <BsDiscord fontSize={26} />
      </MenuItem.Skeleton>
      <Separator className="mx-auto h-[2px] w-10 rounded-md bg-zinc-300 dark:bg-zinc-700" />
      <ScrollArea className="w-full flex-1" hideScrollbar>
        {[...Array(11)].map((_, index) => (
          <div key={index} className="mb-4 flex justify-center">
            <Skeleton className={cn("h-12 w-12")} />
          </div>
        ))}
      </ScrollArea>
      <div className="mt-auto flex flex-col items-center gap-y-4 pb-3">
        <Separator className="mx-auto h-[2px] w-10 rounded-md bg-zinc-300 dark:bg-zinc-700" />
        <ThemeToggle />
        <CreateServerAction />
        <UserSettingsAction userImage={defaultAvatarImagePATH} />
      </div>
    </div>
  );
};

SideMenu.Skeleton = SideMenuSkeleton;

export default SideMenu;
