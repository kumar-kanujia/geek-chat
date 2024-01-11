"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ResetSchema } from "@/schemas/authSchema";
import { Button } from "@/components/ui/button";
import FormError from "@/components/FormError";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState, useTransition } from "react";
import FormSuccess from "@/components/FormSuccess";
import { Input } from "@/components/ui/input";
import { resetPassword } from "@/actions/authActions/login";

const PasswordResetForm = () => {
  const [isSubmitting, startSubmitTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof ResetSchema>) => {
    setError("");
    setSuccess("");
    startSubmitTransition(() => {
      resetPassword(values)
        .then((data) => {
          setSuccess(data.success);
          setError(data.error);
        })
        .catch(() => {
          setError("Something went wrong");
        });
    });
  };

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isSubmitting}
                    placeholder="Enter your email"
                    type="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormError message={error} />
        <FormSuccess message={success} />
        <Button disabled={isSubmitting} type="submit" className="w-full">
          Send Reset Link
        </Button>
      </form>
    </Form>
  );
};
export default PasswordResetForm;
