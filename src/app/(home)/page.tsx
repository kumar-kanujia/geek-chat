import { currentUser } from "@/lib/auth";
import Link from "next/link";

const HomePage = async () => {
  const user = await currentUser();
  return (
    <div>
      HomePage
      {user?.name}
      <Link href="/servers/me">Go</Link>
    </div>
  );
};
export default HomePage;
