import SecondryButton from "@/components/auth/SecondryButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

const AuthErrorPage = () => {
  return (
    <Card className="w-[500px]">
      <CardHeader className="text-center">
        <CardTitle>Oops! Something went wrong!</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex w-full items-center justify-center">
          <ExclamationTriangleIcon className="size-20 text-destructive" />
        </div>
      </CardContent>
      <CardFooter>
        <SecondryButton href="/login" label="Back to login" />
      </CardFooter>
    </Card>
  );
};
export default AuthErrorPage;
