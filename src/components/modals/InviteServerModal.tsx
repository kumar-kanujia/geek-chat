"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useMount from "@/hooks/use-mount";
import { UserServer } from "@/loaders/server";
import { usePathname, useRouter } from "next/navigation";
import { FC, useState } from "react";
import { BsCheck, BsCopy } from "react-icons/bs";
import { MdRefresh } from "react-icons/md";

type InviteServerModalProps = {
  isIntercepted?: boolean;
  server: UserServer;
};

const InviteServerModal: FC<InviteServerModalProps> = ({
  isIntercepted,
  server,
}) => {
  const { id: serverId, inviteCode } = server;
  const pathname = usePathname();
  const router = useRouter();
  const isMounted = useMount();

  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isModalOpen = pathname === `/servers/${serverId}/invite`;

  const inviteUrl = `${origin}/join/${inviteCode}`;

  const onModalClose = (open: boolean) => {
    if (isIntercepted) {
      return !open && router.back();
    } else {
      return !open && router.push(`/servers/${serverId}`);
    }
  };

  const onCopy = () => {
    navigator.clipboard.writeText(inviteUrl);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  if (!isMounted) return null;

  return (
    <Dialog open={isModalOpen} onOpenChange={onModalClose}>
      <DialogContent className="overflow-hidden bg-white p-0 text-black">
        <DialogHeader className="px-6 pt-8">
          <DialogTitle className="text-center text-2xl font-bold">
            Invite your friends 🧑‍🤝‍🧑
          </DialogTitle>
        </DialogHeader>
        <div className="p-6">
          <Label className="text-xs font-bold uppercase text-zinc-500 dark:text-secondary/70">
            Server invite link
          </Label>
          <div className="mt-2 flex items-center gap-x-2">
            <Input
              disabled={isLoading}
              className="border-0 bg-zinc-300/50 text-black focus-visible:ring-0 focus-visible:ring-offset-0"
              value={inviteUrl}
            />
            <Button disabled={isLoading} onClick={onCopy} size="icon">
              {copied ? (
                <BsCheck className="h-4 w-4" />
              ) : (
                <BsCopy className="h-4 w-4" />
              )}
            </Button>
          </div>
          <Button
            // onClick={onNew}
            disabled={isLoading}
            variant="link"
            size="sm"
            className="mt-4 text-xs text-zinc-500"
          >
            Generate a new link
            <MdRefresh className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default InviteServerModal;
