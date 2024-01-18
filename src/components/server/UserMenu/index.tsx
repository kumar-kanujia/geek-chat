import DirectMessageButton from "./DMHeaderButton";
import UserMenuHeader from "./UserMenuHeader";
import UserMenuActions from "./UserMenuActions";
import DirectMessages from "./DirectMessages";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

const UserMenu = () => {
  return (
    <>
      <UserMenuHeader />
      <UserMenuActions />
      <DirectMessageButton />
      <Separator className="mx-auto mb-2 h-[2px] w-56 rounded-md bg-zinc-300 dark:bg-zinc-700" />
      <ScrollArea className="flex-1">
        <DirectMessages />
      </ScrollArea>
    </>
  );
};
export default UserMenu;
