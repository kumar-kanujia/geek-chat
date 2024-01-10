import { Metadata } from "next";
import { FC, ReactNode } from "react";

export const metadata: Metadata = {
  title: "Login",
};

type LoginLayoutProps = {
  children: ReactNode;
};
const LoginLayout: FC<LoginLayoutProps> = ({ children }) => {
  return (
    <section className="flex justify-center items-center h-full w-full">
      {children}
    </section>
  );
};
export default LoginLayout;
