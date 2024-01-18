import SideMenu from "@/components/server/SideMenu";
import { getServerList } from "@/loaders/server";
import { ReactNode, Suspense } from "react";

const MainServerLayout = async ({ children }: { children: ReactNode }) => {
  const servers = await getServerList();
  return (
    <main className="h-full">
      <div className="fixed inset-y-0 z-30 hidden h-full w-[74px] flex-col md:flex">
        <Suspense fallback={<SideMenu.Skeleton />}>
          <SideMenu servers={servers} />
        </Suspense>
      </div>
      <div className="h-full md:pl-[74px]">{children}</div>
    </main>
  );
};
export default MainServerLayout;
