import { auth } from "@/auth";
import { db } from "@/db";

const HomePage = async () => {
  const session = await auth();
  const sess = session?.user;
  const user = await db.user.findUnique({
    where: {
      email: sess?.email || "",
    },
    include: {
      account: true,
    },
  });

  return (
    <div>
      HomePage
      {user?.account?.id}
    </div>
  );
};
export default HomePage;
