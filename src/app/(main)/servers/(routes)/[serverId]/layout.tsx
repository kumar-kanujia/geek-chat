import { getServer } from "@/loaders/server";
import { redirect } from "next/navigation";
import { FC, ReactNode } from "react";

type ServerPageProps = {
  params: {
    serverId: string;
  };
  children: ReactNode;
};

const ServerPageLayout: FC<ServerPageProps> = async ({ params, children }) => {
  const { serverId } = params;
  const server = await getServer(serverId);

  if (!server) {
    return redirect("/servers/not-found");
  }

  return <>{children}</>;
};
export default ServerPageLayout;
