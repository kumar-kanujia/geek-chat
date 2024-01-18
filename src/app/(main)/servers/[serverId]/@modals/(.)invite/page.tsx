import InviteServerModal from "@/components/modals/InviteServerModal";
import { getServerForUser } from "@/loaders/server";
import { redirect } from "next/navigation";
import { FC } from "react";
import { toast } from "sonner";

type ServerInviteProps = {
  params: {
    serverId: string;
  };
};

const InviteServerInterceptPage: FC<ServerInviteProps> = async ({ params }) => {
  const { serverId } = params;
  const server = await getServerForUser(serverId);

  if (!server) {
    toast.warning("You don't have access to this server");
    return redirect("/servers/me");
  }

  return <InviteServerModal server={server} isIntercepted />;
};
export default InviteServerInterceptPage;
