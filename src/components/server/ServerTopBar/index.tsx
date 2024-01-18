import { cn } from "@/lib/utils";

const ServerTopBar = () => {
  return (
    <div
      className={cn(
        "text-md flex h-12 items-center justify-start gap-3 border-b-2 border-neutral-200 px-3 font-semibold dark:border-neutral-800 md:justify-between",
        "bg-white dark:bg-[#313338]",
        "hidden-scrollbar overflow-scroll",
      )}
    >
      ServerTopBar
    </div>
  );
};
export default ServerTopBar;
