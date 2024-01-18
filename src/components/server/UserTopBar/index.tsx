import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { BsPersonFill } from "react-icons/bs";
import UMTabMenuItem from "./UMTabMenuItem";
import CreateDMButton from "./CreateDMButton";
import GithubButton from "./GithubButton";
import { cn } from "@/lib/utils";

const MENU_ITEMS = [
  {
    label: "Online",
    href: "/servers/me",
    value: "add-friend",
  },
  {
    label: "Blocked",
    href: "/blocked",
    value: "blocked",
  },
  {
    label: "Pending",
    href: "/pending",
    value: "pending",
  },
  {
    label: "All",
    href: "/all",
    value: "all",
  },
];

const UserTopBar = () => {
  return (
    <div
      className={cn(
        "text-md flex h-12 items-center justify-start gap-3 border-b-2 border-neutral-200 px-3 font-semibold dark:border-neutral-800 md:justify-between",
        "bg-white dark:bg-[#313338]",
        "hidden-scrollbar overflow-scroll",
      )}
    >
      <div className="md:hidden">
        <HamburgerMenuIcon />
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden flex-none cursor-default items-center gap-2 text-sm font-semibold md:flex ">
          <BsPersonFill className="text-gray-500" fontSize={22} />
          Friends
        </div>
        <div className="hidden h-4 w-0.5 bg-white/10 md:block" />
        {MENU_ITEMS.map((item) => (
          <UMTabMenuItem key={item.value} {...item} />
        ))}
        <UMTabMenuItem
          label="Add a friend"
          href="/online"
          className="rounded-lg bg-green-700 text-sm font-semibold !text-gray-100 hover:bg-green-800"
        />
      </div>
      <div className="ms-auto flex items-center gap-4">
        <div className="ms-4 hidden flex-none cursor-default items-center gap-2 text-sm font-semibold md:flex">
          <CreateDMButton />
        </div>
        <div className=" h-4 w-0.5 bg-white/10" />
        <div className="flex flex-none cursor-default items-center gap-2 text-sm font-semibold">
          <GithubButton />
        </div>
      </div>
    </div>
  );
};
export default UserTopBar;
