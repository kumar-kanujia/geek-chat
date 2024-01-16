"use client";
import { ServerList } from "@/loaders/server";
import MenuItem from "./MenuItem";
import { FC } from "react";
import { useParams } from "next/navigation";

type ServerIconProps = {
  server: ServerList[0];
};

const ServerIcon: FC<ServerIconProps> = ({ server }) => {
  const params = useParams();
  const isActive = params.serverId === server.id;
  return (
    <div className="mb-4 flex justify-center">
      <MenuItem
        key={server.id}
        href={`/servers/${server.id}`}
        image={{ url: server.imageUrl, alt: "image" }}
        tooltipContent={server.name}
        isActive={isActive}
      />
    </div>
  );
};
export default ServerIcon;
