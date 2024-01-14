import { FC, ReactComponentElement, ReactNode, ReactPropTypes } from "react";

type UserLayoutProps = {
  children: ReactNode;
};
const UserLayout: FC<UserLayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};
export default UserLayout;
