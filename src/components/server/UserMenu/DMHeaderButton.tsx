import ActionTooltip from "@/components/ActionTooltip";
import { cn } from "@/lib/utils";
import { BsPlus } from "react-icons/bs";

const DMHeaderButton = () => {
  return (
    <div
      className={cn(
        "flex cursor-default items-center justify-between px-4 text-xs font-semibold",
        "mb-2 align-middle text-gray-400 hover:text-gray-200",
      )}
    >
      Direct Messages
      <ActionTooltip label="Create DM" side="top" align="center">
        <button className="text-gray-300">
          <BsPlus fontSize={22} />
        </button>
      </ActionTooltip>
    </div>
  );
};
export default DMHeaderButton;
