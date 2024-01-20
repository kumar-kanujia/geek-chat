import MemberProfileProvider from "@/components/providers/MemberProfileProvider";
import ServerProvider from "@/components/providers/ServerProvider";
import ServerMenu from "@/components/server/ServerMenu";
import ServerTopBar from "@/components/server/ServerTopBar";
import { getMemberProfileByServerId } from "@/loaders/member";
import { getServerForUser } from "@/loaders/server";
import { redirect } from "next/navigation";
import { FC, ReactNode } from "react";

type ServerLayoutProps = {
  params: {
    serverId: string;
  };
  children: ReactNode;
  modals?: ReactNode;
};

const ServerLayout: FC<ServerLayoutProps> = async ({
  params,
  children,
  modals,
}) => {
  const { serverId } = params;
  const memberProfile = await getMemberProfileByServerId(serverId);

  if (!memberProfile) {
    redirect("/servers/not-found");
  }

  const { Server: server, role } = memberProfile;

  return (
    <MemberProfileProvider memberProfile={memberProfile}>
      <ServerProvider server={server}>
        <aside className="fixed inset-y-0 z-20 hidden h-full w-60 flex-col bg-[#F2F3F5] dark:bg-[#2B2D31] md:flex">
          <nav className="flex h-full w-full flex-col text-primary">
            <ServerMenu server={server} userRole={role} />
          </nav>
        </aside>
        <section className="h-full md:pl-60">
          <div className="flex h-full flex-col">
            <ServerTopBar />
            {children}
          </div>
        </section>
        {modals}
      </ServerProvider>
    </MemberProfileProvider>
  );
};
export default ServerLayout;
