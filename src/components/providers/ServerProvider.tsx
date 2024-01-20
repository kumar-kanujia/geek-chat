"use client";

import serverContext from "@/context/serverContext";
import { UserServer } from "@/loaders/server";
import { FC, ReactNode, useEffect } from "react";

type ServerProviderProps = {
  children: ReactNode;
  server: UserServer;
};

const ServerProvider: FC<ServerProviderProps> = ({ children, server }) => {
  const { setServer } = serverContext();
  useEffect(() => {
    setServer(server);
  }, [server, setServer]);
  return <>{children}</>;
};
export default ServerProvider;
