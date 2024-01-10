import { FC, ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <main className="bg-[url('/_images/login.jpg')] bg-cover h-full w-full">
      {children}
    </main>
  );
};
export default AuthLayout;
