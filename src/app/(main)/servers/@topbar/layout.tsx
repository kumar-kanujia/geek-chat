import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

type TopBarLayoutProps = {
  children: ReactNode;
};

const TopBarLayout: FC<TopBarLayoutProps> = ({ children }) => {
  return (
    <div
      className={cn(
        "text-md font-semibold px-3 flex justify-start md:justify-between gap-3 items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2",
        "bg-white dark:bg-[#313338]",
        "overflow-scroll hidden-scrollbar"
      )}
    >
      {children}
    </div>
  );
};
export default TopBarLayout;
