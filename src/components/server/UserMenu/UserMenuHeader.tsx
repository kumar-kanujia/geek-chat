import { Button } from "@/components/ui/button";
import Link from "next/link";

const UserMenuHeader = () => {
  return (
    <header className="px-2 flex h-12 items-center shadow-md">
      <Button
        variant="outline"
        size="icon"
        className="w-full text-foreground bg-[#E3E5E8] dark:bg-[#1E1F22] hover:bg-[#D9DADC] dark:hover:bg-[#2F3136]"
        asChild
      >
        <Link href="/servers/me">Find or start a conversation</Link>
      </Button>
    </header>
  );
};
export default UserMenuHeader;
