import JoinServerCard from "@/components/server/JoinServerCard";
import { FC } from "react";

type JoinServerPageProps = {
  params: {
    inviteId: string;
  };
};

const JoinServerPage: FC<JoinServerPageProps> = ({ params }) => {
  const { inviteId } = params;
  return (
    <div className="flex h-full items-center justify-center">
      <JoinServerCard inviteCode={inviteId} />
    </div>
  );
};
export default JoinServerPage;
