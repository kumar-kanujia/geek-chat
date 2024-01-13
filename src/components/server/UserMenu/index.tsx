import DirectMessageButton from "./DMHeaderButton";
import UserMenuHeader from "./UserMenuHeader";
import UserMenuActions from "./UserMenuActions";
import DirectMessages from "./DirectMessages";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

const UserMenu = () => {
  return (
    <nav className="flex flex-col h-full text-primary w-full">
      <UserMenuHeader />
      <UserMenuActions />
      <DirectMessageButton />
      <Separator className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-56 mx-auto mb-2" />
      <ScrollArea className="flex-1">
        <DirectMessages />
      </ScrollArea>
    </nav>
  );
};
export default UserMenu;
