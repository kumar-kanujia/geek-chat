import LoginForm from "./_components/LoginForm";
import SecondryButton from "@/components/auth/SecondryButton";
import SocialFooter from "@/components/auth/SocialFooter";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const LoginPage = () => {
  return (
    <Card className="w-[500px]">
      <CardHeader className="text-center">
        <CardTitle>Welcome Back</CardTitle>
        <CardDescription>
          We&apos;re so excited to see you agian!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
      <CardFooter>
        <SocialFooter />
      </CardFooter>
      <CardFooter>
        <SecondryButton href="/register" label="Need an account? Register" />
      </CardFooter>
    </Card>
  );
};
export default LoginPage;
