import PasswordResetForm from "@/app/(auth)/_components/PasswordResetForm";
import SecondryButton from "@/components/auth/SecondryButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ResetPage = () => {
  return (
    <Card className="w-[500px]">
      <CardHeader className="text-center">
        <CardTitle>Forgot Password?</CardTitle>
        <CardDescription>Don&apos;t sweat we will change it!!</CardDescription>
      </CardHeader>
      <CardContent>
        <PasswordResetForm />
      </CardContent>
      <CardFooter>
        <SecondryButton href="/login" label="Back to login" />
      </CardFooter>
    </Card>
  );
};
export default ResetPage;
