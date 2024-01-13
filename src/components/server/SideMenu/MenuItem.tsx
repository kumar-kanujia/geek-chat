import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import BorderedBadge from "@/components/ui/bordered-badge";
import ActionTooltip from "@/components/ActionTooltip";

const SideTip = ({ isActive }: { isActive?: boolean }) => (
  <div
    className={cn(
      "absolute -left-4 w-[9px] rounded-lg bg-black dark:bg-white ",
      "transition-all group-hover:scale-100",
      isActive ? "bottom-1 top-1" : "top-1/2 -mt-3 h-6 scale-0"
    )}
  />
);

type MenuItemProps = {
  isActive?: boolean;
  tooltipContent: string;
  notificationCount?: number;
  image?: {
    url: string;
    alt: string;
  };
} & React.ComponentPropsWithoutRef<typeof Link>;

const MenuItem = ({
  isActive,
  tooltipContent,
  notificationCount,
  image,
  children,
  className,
  href,
}: MenuItemProps) => {
  const roundClasses = isActive
    ? "rounded-[15px]"
    : "rounded-[100%] hover:rounded-[15px]";
  return (
    <ActionTooltip label={tooltipContent} side="right" align="center">
      <Link
        className={cn(
          "group relative block h-12 w-12 bg-foreground bg-cover transition-all hover:shadow-xl",
          "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          "focus-visible:ring-offset-background active:translate-y-[1px]",
          roundClasses,
          className
        )}
        href={href}
      >
        <SideTip isActive={isActive} />
        <BorderedBadge
          className="pointer-events-none z-10"
          count={notificationCount}
        />
        {image && (
          <Image
            src={image.url}
            alt={image.alt}
            width={48}
            height={48}
            unoptimized
            priority
            className={cn("absolute inset-0 transition-all", roundClasses)}
          />
        )}
        {children}
      </Link>
    </ActionTooltip>
  );
};

interface MenuItemSkeletonProps
  extends React.HTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean;
}

const MenuItemSkeleton = ({
  isActive,
  className,
  ...props
}: MenuItemSkeletonProps) => (
  <a
    href="#"
    className={cn(
      "relative block h-12 w-12 bg-foreground bg-cover transition-all",
      "group hover:shadow-xl focus:outline-none",
      isActive ? "rounded-[15px]" : "rounded-[100%]",
      className
    )}
    {...props}
  />
);

MenuItem.Skeleton = MenuItemSkeleton;

export default MenuItem;
