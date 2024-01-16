"use client";
import { usePathname } from "next/navigation";
import MenuItem from "./MenuItem";
import { FC } from "react";

type UserSettingsActionProps = {
  className?: string;
  userImage: string;
};

const UserSettingsAction: FC<UserSettingsActionProps> = ({
  className,
  userImage,
}) => {
  const pathname = usePathname();

  const isActive = pathname === "/settings";

  return (
    <MenuItem
      href="/settings"
      isActive={isActive}
      image={{
        url: userImage,
        alt: "User Settings",
      }}
      tooltipContent="Profile Settings"
      className={className}
    />
  );
};
export default UserSettingsAction;
