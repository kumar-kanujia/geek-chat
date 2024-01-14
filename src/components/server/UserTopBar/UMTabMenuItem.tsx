"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

type UMTabMenuItemProps = { label: string; href: string; className?: string };

const UMTabMenuItem: FC<UMTabMenuItemProps> = ({ label, href, className }) => {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Button
      variant="ghost"
      className={cn(
        "rounded px-2 py-1 text-sm hover:bg-gray-800/50",
        "active:bg-gray-800 active:text-gray-100",
        active
          ? "cursor-default bg-gray-800 text-gray-100"
          : "text-gray-300 hover:text-gray-200",
        className
      )}
      asChild
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
};
export default UMTabMenuItem;
