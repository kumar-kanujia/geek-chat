"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useMount from "@/hooks/use-mount";
import FileUpload from "@/components/FileUpload";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createServerFormSchema } from "@/schemas/serverSchema";
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
import FormError from "../FormError";
import { z } from "zod";
import { createServer } from "@/actions/server";
import { toast } from "sonner";

type CreateServerModalProps = {
  isIntercepted?: boolean;
};

const CreateServerModal: FC<CreateServerModalProps> = ({ isIntercepted }) => {
  const router = useRouter();
  const isMounted = useMount();

  const [error, setError] = useState("");

  const form = useForm({
    resolver: zodResolver(createServerFormSchema),
    defaultValues: {
      name: "",
      imageUrl: "",
    },
  });

  const { isLoading, isSubmitting } = form.formState;

  const handleOpenChange = () => {
    if (isIntercepted) {
      router.back();
    } else {
      router.push("/servers/me");
    }
  };

  const onSubmit = async (values: z.infer<typeof createServerFormSchema>) => {
    setError("");
    createServer(values, isIntercepted).then((data) => {
      if (data?.error) {
        setError(data.error);
      } else {
        form.reset();
        toast.success(data?.success, {
          action: {
            label: "Go there!",
            onClick: () => {
              router.push(`/servers/${data?.serverId}`);
            },
          },
          duration: 3000,
        });
        if (!isIntercepted) {
          router.push(`/servers/${data?.serverId}`);
        } else {
          router.back();
        }
      }
    });
  };

  if (!isMounted) {
    return null;
  }

  return (
    <Dialog defaultOpen onOpenChange={handleOpenChange}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Create a new server 👨🏻‍🔧
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500 text-lg">
            {
              "Give your server a personality with a name and an image. You can always change it later."
            }
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="px-6 space-y-8">
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
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      Server name
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                        placeholder="Enter server name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormError message={error} />
            </div>
            <DialogFooter className="bg-gray-100 px-6 py-4">
              <Button variant="default" disabled={isLoading || isSubmitting}>
                {isSubmitting ? "Creating..." : "Create"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
export default CreateServerModal;
