"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

type UserMenuActionItemProps = {
  children: React.ReactNode;
  actionLabel: string;
  href: string;
};

const UserMenuActionItem: FC<UserMenuActionItemProps> = ({
  actionLabel,
  children,
  href,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <li className="mb-2 list-none">
      <Button
        className={cn(
          "mb-1 w-full justify-start py-6 text-zinc-500 transition hover:bg-zinc-700/10 hover:text-zinc-600 dark:text-zinc-400 dark:hover:bg-zinc-700/50 dark:hover:text-zinc-300",
          isActive && "bg-zinc-700/20 dark:bg-zinc-700",
        )}
        variant="ghost"
        asChild
      >
        <Link href={href}>
          {children}
          <span className="ms-2">{actionLabel}</span>
        </Link>
      </Button>
    </li>
  );
};
export default UserMenuActionItem;
