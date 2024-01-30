"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FileUpload from "@/components/FileUpload";

import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createServerFormSchema } from "@/schemas/serverSchema";
import { usePathname, useRouter } from "next/navigation";
import useMount from "@/hooks/use-mount";
import serverContext from "@/context/serverContext";
import useMemberProfile from "@/hooks/use-member-profile";
import { MemberRole } from "@prisma/client";
import { toast } from "sonner";
import { updateServer } from "@/actions/server";

type EditServerModalProps = {
  isIntercepted?: boolean;
};

const EditServerModal: FC<EditServerModalProps> = ({ isIntercepted }) => {
  const router = useRouter();

  const isMounted = useMount();
  const pathname = usePathname();

  const form = useForm({
    resolver: zodResolver(createServerFormSchema),
    defaultValues: {
      name: "",
      imageUrl: "",
    },
  });

  const { server, setServer } = serverContext();
  const memberProfile = useMemberProfile();

  useEffect(() => {
    if (
      isMounted &&
      (!memberProfile || memberProfile.role !== MemberRole.ADMIN)
    ) {
      toast.warning("You don't have permission to view this page");
      router.push(`/servers/${server?.id}`);
    }
  }, [isIntercepted, isMounted, memberProfile, router, server?.id]);

  useEffect(() => {
    if (!server) return;
    form.setValue("name", server.name);
    form.setValue("imageUrl", server.imageUrl);
  }, [form, server]);

  if (!server || !memberProfile) return null;

  const { role } = memberProfile;

  const { id: serverId } = server;

  const isModalOpen = pathname === `/servers/${serverId}/edit`;

  const { isLoading } = form.formState;

  const onModalClose = (open: boolean) => {
    if (isIntercepted) {
      return !open && router.back();
    } else {
      return !open && router.push(`/servers/${serverId}`);
    }
  };

  const onSubmit = async (values: any) => {
    updateServer(serverId, values).then((data) => {
      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success(data?.success);
        router.push(`/servers/${serverId}`);
      }
    });
  };

  if (!isMounted) return null;

  if (role === MemberRole.ADMIN) {
    return (
      <Dialog open={isModalOpen} onOpenChange={onModalClose}>
        <DialogContent className="overflow-hidden bg-white p-0 text-black">
          <DialogHeader className="px-6 pt-8">
            <DialogTitle className="text-center text-2xl font-bold">
              Customize your server 👨🏻‍🔧
            </DialogTitle>
            <DialogDescription className="text-center text-lg text-zinc-500">
              {
                "Change your server a personality with a new name and an image. You can always change it later."
              }
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="space-y-8 px-6">
                <div className="flex items-center justify-center text-center">
                  <FormField
                    control={form.control}
                    name="imageUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <FileUpload
                            value={field.value}
                            onChange={(url?: string) => {
                              form.setValue("imageUrl", url || "");
                            }}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-bold uppercase text-zinc-500 dark:text-secondary/70">
                        Server name
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          className="border-0 bg-zinc-300/50 text-black focus-visible:ring-0 focus-visible:ring-offset-0"
                          placeholder="Enter server name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <DialogFooter className="bg-gray-100 px-6 py-4">
                <Button variant="default" disabled={isLoading}>
                  Update
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    );
  }
};
export default EditServerModal;
