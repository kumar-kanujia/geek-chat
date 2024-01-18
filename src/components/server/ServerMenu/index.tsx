import { MemberRole } from "@prisma/client";
import ServerHeader from "./ServerHeader";
import { UserServer } from "@/loaders/server";
import { FC } from "react";

type ServerMenuProps = {
  server: UserServer;
};

const ServerMenu: FC<ServerMenuProps> = ({ server }) => {
  const { id, name } = server;
  return (
    <>
      <ServerHeader
        serverId={id}
        serverName={name}
        userRole={MemberRole.ADMIN}
      />
    </>
  );
};
export default ServerMenu;
