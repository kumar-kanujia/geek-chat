import { FC, ReactComponentElement, ReactNode, ReactPropTypes } from "react";

type UserLayoutProps = {
  children: ReactNode;
};
const UserLayout: FC<UserLayoutProps> = ({ children }) => {
  return <div className="h-full">{children}</div>;
};
export default UserLayout;
