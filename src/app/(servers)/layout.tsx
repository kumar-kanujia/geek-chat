import SideMenu from "@/components/server/SideMenu";
import { ReactNode, Suspense } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="h-full dark:bg-[#313338]">
      <div className="hidden md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0">
        <Suspense fallback={<SideMenu.Skeleton />}>
          <SideMenu />
        </Suspense>
      </div>
      <main className="md:pl-[72px] h-full">{children}</main>
    </main>
  );
};
export default MainLayout;
