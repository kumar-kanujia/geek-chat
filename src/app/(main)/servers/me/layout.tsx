import UserMenu from "@/components/server/UserMenu";
import UserTopBar from "@/components/server/UserTopBar";
import { FC, ReactNode } from "react";

type UserLayoutProps = {
  children: ReactNode;
};

const UserLayout: FC<UserLayoutProps> = ({ children }) => {
  return (
    <>
      <aside className="fixed inset-y-0 z-20 hidden h-full w-60 flex-col bg-[#F2F3F5] dark:bg-[#2B2D31] md:flex">
        <nav className="flex h-full w-full flex-col text-primary">
          <UserMenu />
        </nav>
      </aside>
      <section className="h-full md:pl-60">
        <div className="flex h-full flex-col">
          <UserTopBar />
          {children}
        </div>
      </section>
    </>
  );
};
export default UserLayout;
