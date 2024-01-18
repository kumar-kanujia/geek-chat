import { FC, ReactNode } from "react";

type ServerLayoutProps = {
  children: ReactNode;
  serversModal?: ReactNode;
};
const ServersLayout: FC<ServerLayoutProps> = ({ children, serversModal }) => {
  return (
    <>
      {serversModal}
      <div className="h-full">{children}</div>
    </>
  );
};
export default ServersLayout;
