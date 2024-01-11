"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  const logoutHandler = () => {
    signOut({ redirect: true });
  };

  return (
    <Button
      variant="danger"
      size="lg"
      className="w-full"
      onClick={logoutHandler}
    >
      Logout
    </Button>
  );
};
export default LogoutButton;
