"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { JoinServer } from "@/loaders/server";
import { FC, useState } from "react";
import Link from "next/link";
import { joinServer } from "@/actions/server";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type JoinServerCardProps = {
  server: JoinServer;
};

const JoinServerCard: FC<JoinServerCardProps> = ({ server }) => {
  const [hasJoined, setHasJoined] = useState(false);

  const onJoinClick = () => {
    joinServer(server.serverId).then((isJoined) => {
      if (isJoined) {
        toast.loading(`You have Joined ${server.serverName} server!!`);
        setHasJoined(isJoined);
      } else {
        toast.error("Something went wrong!");
      }
    });
  };

  return (
    <Card className="w-[400px]">
      <CardHeader className="text-center">
        <CardTitle className="flex justify-center">
          <div className="relative h-20 w-20">
            <Image
              fill
              src={server.imageUrl}
              alt="Upload"
              className="rounded-full"
            />
          </div>
        </CardTitle>
        {!hasJoined && server.isMember ? (
          <CardDescription>
            You are alredy a member of{" "}
            <span className="text-primary">{server.serverName}</span> Server
          </CardDescription>
        ) : (
          <CardDescription>
            Invitation to join{" "}
            <span className="text-primary">{server.serverName}</span> Server
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <div className="flex w-full items-center gap-x-2">
          <Button size="lg" className="w-full" variant="secondary" asChild>
            <Link href={"/servers/me"}>Go to DM</Link>
          </Button>
          {hasJoined || server.isMember ? (
            <Button size="lg" className="w-full" variant="default">
              <Link href={`/servers/${server.serverId}`}>Go to Server</Link>
            </Button>
          ) : (
            <Button
              size="lg"
              className="w-full"
              variant="default"
              onClick={onJoinClick}
              disabled={hasJoined}
            >
              Accept
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
export default JoinServerCard;
