import ActionTooltip from "@/components/ActionTooltip";
import Link from "next/link";
import { MdAddCircle } from "react-icons/md";

const CreateServerAction = () => {
  return (
    <ActionTooltip side="right" align="center" label="Add a server">
      <Link href="/servers/create" className="group flex items-center">
        <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-emerald-500">
          <MdAddCircle
            className="group-hover:text-white transition text-emerald-500"
            size={30}
          />
        </div>
      </Link>
    </ActionTooltip>
  );
};
export default CreateServerAction;
