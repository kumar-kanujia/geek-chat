import JoinServerCard from "@/components/server/JoinServerCard";
import { getServerDetailsForInviteCode } from "@/loaders/server";
import { FC } from "react";

type JoinServerPageProps = {
  params: {
    inviteId: string;
  };
};

const JoinServerPage: FC<JoinServerPageProps> = async ({ params }) => {
  const { inviteId } = params;
  const serverDetails = await getServerDetailsForInviteCode(inviteId);

  return (
    <div className="flex h-full items-center justify-center">
      <JoinServerCard server={serverDetails} />
    </div>
  );
};
export default JoinServerPage;
