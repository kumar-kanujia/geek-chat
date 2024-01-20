import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const JoinServerCard = ({ inviteCode }: { inviteCode: string }) => {
  const co = {
    serverName: "xyx",
    src: "https://utfs.io/f/fff3a17f-07cb-40c0-8a93-7364b75b2044-biy9p6.png",
  };
  const { serverName, src } = co;
  return (
    <Card className="w-[400px]">
      <CardHeader className="text-center">
        <CardTitle className="flex justify-center">
          <div className="relative h-20 w-20">
            <Image fill src={src} alt="Upload" className="rounded-full" />
          </div>
        </CardTitle>
        <CardDescription>Invitation to join {serverName}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex w-full items-center gap-x-2">
          <Button size="lg" className="w-full" variant="secondary">
            Go to DM
          </Button>
          <Button size="lg" className="w-full" variant="default">
            Accept
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
export default JoinServerCard;
