import Link from "next/link";
import { GiCoalWagon } from "react-icons/gi";

const NotFoundServer = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="text-gray-300">
        <GiCoalWagon fontSize={62} />
      </div>
      <h1 className="text-2xl text-gray-400">Not found</h1>
      <h2 className="text-lg text-gray-500">
        Whooops! Couldn&apos;t find server that you looking for
      </h2>
      <Link
        href="/servers/me"
        className="py-4 text-sm text-gray-400 underline hover:text-gray-300"
      >
        Go back to DM
      </Link>
    </div>
  );
};
export default NotFoundServer;
