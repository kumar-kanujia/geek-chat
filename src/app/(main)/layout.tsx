import SideMenu from "@/components/server/SideMenu";
import { ReactNode, Suspense } from "react";

const MainServerLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="h-full">
      <div className="hidden md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0">
        <Suspense fallback={<SideMenu.Skeleton />}>
          <SideMenu />
        </Suspense>
      </div>
      <div className="md:pl-[72px] h-full">{children}</div>
    </main>
  );
};
export default MainServerLayout;
