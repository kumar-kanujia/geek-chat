import { ReactNode } from "react";

type ServerLayoutProps = React.PropsWithChildren<HTMLDivElement> & {
  sidebar: ReactNode;
};

const ServerLayout = ({ children, sidebar, ...props }: ServerLayoutProps) => {
  return (
    <div className="h-full">
      <aside className="hidden md:flex h-full w-60 z-20 flex-col fixed inset-y-0 dark:bg-[#2B2D31] bg-[#F2F3F5]">
        {sidebar}
      </aside>
      <section className="h-full md:pl-60">{children}</section>
    </div>
  );
};
export default ServerLayout;
