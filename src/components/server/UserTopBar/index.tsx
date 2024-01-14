import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { BsPersonFill } from "react-icons/bs";
import UMTabMenuItem from "./UMTabMenuItem";
import CreateDMButton from "./CreateDMButton";
import GithubButton from "./GithubButton";

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
    <>
      <div className="md:hidden">
        <HamburgerMenuIcon />
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex flex-none items-center gap-2 text-sm font-semibold cursor-default ">
          <BsPersonFill className="text-gray-500" fontSize={22} />
          Friends
        </div>
        <div className="hidden md:block bg-white/10 h-4 w-0.5" />
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
        <div className="hidden md:flex flex-none items-center gap-2 text-sm font-semibold cursor-default ms-4">
          <CreateDMButton />
        </div>
        <div className=" bg-white/10 h-4 w-0.5" />
        <div className="flex flex-none items-center gap-2 text-sm font-semibold cursor-default">
          <GithubButton />
        </div>
      </div>
    </>
  );
};
export default UserTopBar;
