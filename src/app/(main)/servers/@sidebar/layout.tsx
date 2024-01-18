import { ReactNode } from "react";

const SideBarLayout = ({ children }: { children: ReactNode }) => {
  return (
    <nav className="flex h-full w-full flex-col text-primary">{children}</nav>
  );
};
export default SideBarLayout;
