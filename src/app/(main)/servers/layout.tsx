import { ReactNode } from "react";

type ServerLayoutProps = React.PropsWithChildren<HTMLDivElement> & {
  sidebar: ReactNode;
  topbar: ReactNode;
  modal?: ReactNode;
};

const ServerLayout = ({
  children,
  sidebar,
  topbar,
  modal,
}: ServerLayoutProps) => {
  return (
    <>
      {modal}
      <div className="h-full">
        <aside className="fixed inset-y-0 z-20 hidden h-full w-60 flex-col bg-[#F2F3F5] dark:bg-[#2B2D31] md:flex">
          {sidebar}
        </aside>
        <section className="h-full md:pl-60">
          <div className="flex h-full flex-col">
            {topbar}
            {children}
          </div>
        </section>
      </div>
    </>
  );
};
export default ServerLayout;
