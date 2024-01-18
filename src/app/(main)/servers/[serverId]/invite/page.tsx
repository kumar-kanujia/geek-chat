import { FC } from "react";
import { redirect } from "next/navigation";
import { MemberRole } from "@prisma/client";
import { getServerForUserWithMemberRole } from "@/loaders/server";
import InviteServerModal from "@/components/modals/InviteServerModal";

type ServerInviteProps = {
  params: {
    serverId: string;
  };
};

const ServerInvite: FC<ServerInviteProps> = async ({ params }) => {
  const { serverId } = params;
  const serverWithRole = await getServerForUserWithMemberRole(serverId);

  if (!serverWithRole) {
    return redirect("/servers/me");
  }

  const { server, role } = serverWithRole;

  if (!server) {
    return redirect("/servers/me");
  }

  if (role === MemberRole.GUEST) {
    return redirect("/servers/me");
  }

  return <InviteServerModal server={server} />;
};
export default ServerInvite;
