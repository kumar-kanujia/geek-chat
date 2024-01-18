import LogoutButton from "@/components/auth/LogoutButton";
import SecondryButton from "@/components/auth/SecondryButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const LogoutPage = () => {
  return (
    <Card className="w-[500px]">
      <CardHeader className="text-center">
        <CardTitle>Are you sure you want to logout?</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex w-full items-center gap-x-2">
          <Button variant="secondary" size="lg" className="w-full" asChild>
            <Link href="/">Cancel</Link>
          </Button>
          <LogoutButton />
        </div>
      </CardContent>
      <CardFooter>
        <SecondryButton href="/" label="Back to home" />
      </CardFooter>
    </Card>
  );
};
export default LogoutPage;
