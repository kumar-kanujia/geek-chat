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
    <ul className="mt-2 w-full px-2">
      {ACTION_ITEMS.map(({ Icon, href, label }) => (
        <UserMenuActionItem key={label} actionLabel={label} href={href}>
          <Icon className="h-8 w-8" />
        </UserMenuActionItem>
      ))}
    </ul>
  );
};
export default UserMenuActions;
