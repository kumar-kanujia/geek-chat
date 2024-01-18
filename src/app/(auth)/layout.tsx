import { FC, ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <main className="h-full w-full bg-[url('/_images/login.jpg')] bg-cover">
      <section className="flex h-full w-full items-center justify-center">
        {children}
      </section>
    </main>
  );
};
export default AuthLayout;
