"use client";

import serverContext from "@/context/serverContext";
import { Server } from "@prisma/client";
import { FC, ReactNode, useEffect } from "react";

type ServerProviderProps = {
  children: ReactNode;
  server: Server;
};

const ServerProvider: FC<ServerProviderProps> = ({ children, server }) => {
  const { setServer } = serverContext();
  useEffect(() => {
    setServer(server);
  }, [server, setServer]);
  return <>{children}</>;
};
export default ServerProvider;
