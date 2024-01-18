import ActionTooltip from "@/components/ActionTooltip";
import Link from "next/link";
import { MdAddCircle } from "react-icons/md";

const CreateServerAction = () => {
  return (
    <ActionTooltip side="right" align="center" label="Add a server">
      <Link href="/servers/create" className="group flex items-center">
        <div className="mx-3 flex h-[48px] w-[48px] items-center justify-center overflow-hidden rounded-[24px] bg-background transition-all group-hover:rounded-[16px] group-hover:bg-emerald-500 dark:bg-neutral-700">
          <MdAddCircle
            className="text-emerald-500 transition group-hover:text-white"
            size={30}
          />
        </div>
      </Link>
    </ActionTooltip>
  );
};
export default CreateServerAction;
