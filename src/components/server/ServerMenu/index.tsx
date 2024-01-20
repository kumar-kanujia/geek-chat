import { MemberRole, Server } from "@prisma/client";
import ServerHeader from "./ServerHeader";
import { FC } from "react";

type ServerMenuProps = {
  server: Server;
  userRole: MemberRole;
};

const ServerMenu: FC<ServerMenuProps> = ({ server, userRole }) => {
  const { id, name } = server;
  return (
    <>
      <ServerHeader serverId={id} serverName={name} userRole={userRole} />
    </>
  );
};
export default ServerMenu;
