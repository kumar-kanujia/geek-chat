import { ReactNode } from "react";

const SideBarLayout = ({ children }: { children: ReactNode }) => {
  return (
    <nav className="flex flex-col h-full text-primary w-full">{children}</nav>
  );
};
export default SideBarLayout;
