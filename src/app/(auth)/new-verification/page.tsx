import NewVerificationForm from "@/app/(auth)/_components/NewVerificationForm";
import SecondryButton from "@/components/auth/SecondryButton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const VerificationPage = () => {
  return (
    <Card className="w-[500px]">
      <CardHeader className="text-center">
        <CardTitle>We are happy to onboard you!</CardTitle>
      </CardHeader>
      <CardContent>
        <NewVerificationForm />
      </CardContent>
      <CardFooter>
        <SecondryButton href="/login" label="Back to login" />
      </CardFooter>
    </Card>
  );
};
export default VerificationPage;
