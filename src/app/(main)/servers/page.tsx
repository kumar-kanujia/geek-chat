import { redirect } from "next/navigation";

const ServerPage = () => {
  redirect("/servers/me");
};
export default ServerPage;
