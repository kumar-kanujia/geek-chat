import SecondryButton from "@/components/auth/SecondryButton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import NewPasswordForm from "@/app/(auth)/_components/NewPasswordForm";

const NewPasswordPage = () => {
  return (
    <Card className="w-[500px]">
      <CardHeader className="text-center">
        <CardTitle>Change your password!</CardTitle>
      </CardHeader>
      <CardContent>
        <NewPasswordForm />
      </CardContent>
      <CardFooter>
        <SecondryButton href="/login" label="Go back to login" />
      </CardFooter>
    </Card>
  );
};
export default NewPasswordPage;
