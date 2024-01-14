import { BsInboxFill, BsPersonFill } from "react-icons/bs";
import UserMenuActionItem from "./UserMenuActionItem";

const ACTION_ITEMS = [
  {
    label: "Friends",
    Icon: BsPersonFill,
    href: "/servers/me",
  },
  {
    label: "Messages",
    Icon: BsInboxFill,
    href: "/messages",
  },
];

const UserMenuActions = () => {
  return (
    <ul className="px-2 mt-2 w-full">
      {ACTION_ITEMS.map(({ Icon, href, label }) => (
        <UserMenuActionItem key={label} actionLabel={label} href={href}>
          <Icon className="w-8 h-8" />
        </UserMenuActionItem>
      ))}
    </ul>
  );
};
export default UserMenuActions;
