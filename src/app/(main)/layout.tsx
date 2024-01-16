import SideMenu from "@/components/server/SideMenu";
import { getServerList } from "@/loaders/server";
import { ReactNode, Suspense } from "react";

const MainServerLayout = async ({ children }: { children: ReactNode }) => {
  const servers = await getServerList();
  return (
    <main className="h-full">
      <div className="hidden md:flex h-full w-[74px] z-30 flex-col fixed inset-y-0">
        <Suspense fallback={<SideMenu.Skeleton />}>
          <SideMenu servers={servers} />
        </Suspense>
      </div>
      <div className="md:pl-[74px] h-full">{children}</div>
    </main>
  );
};
export default MainServerLayout;
