import { Button } from "@/components/ui/button";
import Link from "next/link";

const UserMenuHeader = () => {
  return (
    <header className="flex h-12 items-center px-2 shadow-md">
      <Button
        variant="outline"
        size="icon"
        className="w-full bg-[#E3E5E8] text-foreground hover:bg-[#D9DADC] dark:bg-[#1E1F22] dark:hover:bg-[#2F3136]"
        asChild
      >
        <Link href="/servers/me">Find or start a conversation</Link>
      </Button>
    </header>
  );
};
export default UserMenuHeader;
