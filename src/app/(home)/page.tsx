import { currentUser } from "@/lib/auth";

const HomePage = async () => {
  const user = await currentUser();
  return (
    <div>
      HomePage
      {user?.name}
    </div>
  );
};
export default HomePage;
