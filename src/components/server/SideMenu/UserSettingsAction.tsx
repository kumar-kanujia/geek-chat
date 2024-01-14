"use client";
import { usePathname } from "next/navigation";
import MenuItem from "./MenuItem";

interface UserSettingsAction {
  className?: string;
}

const UserSettingsAction = () => {
  const pathname = usePathname();

  const isActive = pathname === "/settings";

  const url = "";
  return (
    <MenuItem
      href="/settings"
      isActive={isActive}
      image={{
        url: url || "https://avatars.githubusercontent.com/u/56792479",
        alt: "User Settings",
      }}
      tooltipContent={`User Settings`}
    />
  );
};
export default UserSettingsAction;
