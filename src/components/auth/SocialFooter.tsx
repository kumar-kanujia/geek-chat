"use client";
import { DEFAULT_LOGIN_REDIRECT } from "@/auth/routes";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

type LoginProvider = "google" | "github";

const SocialFooter = () => {
  const searchParams = useSearchParams();

  const callBackUrl = searchParams.get("callbackUrl");

  const onClick = (provider: LoginProvider) => {
    signIn(provider, { callbackUrl: callBackUrl || DEFAULT_LOGIN_REDIRECT });
  };

  return (
    <div className="flex w-full items-center gap-x-2">
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick("google")}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick("github")}
      >
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};
export default SocialFooter;
