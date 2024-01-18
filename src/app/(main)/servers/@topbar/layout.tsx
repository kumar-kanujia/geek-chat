import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

type TopBarLayoutProps = {
  children: ReactNode;
};

const TopBarLayout: FC<TopBarLayoutProps> = ({ children }) => {
  return (
    <div
      className={cn(
        "text-md flex h-12 items-center justify-start gap-3 border-b-2 border-neutral-200 px-3 font-semibold dark:border-neutral-800 md:justify-between",
        "bg-white dark:bg-[#313338]",
        "hidden-scrollbar overflow-scroll",
      )}
    >
      {children}
    </div>
  );
};
export default TopBarLayout;
