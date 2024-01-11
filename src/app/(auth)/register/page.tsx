import RegisterForm from "@/app/(auth)/_components/RegisterForm";
import SecondryButton from "@/components/auth/SecondryButton";
import SocialFooter from "@/components/auth/SocialFooter";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
};

const RegisterPage = () => {
  return (
    <Card className="w-[500px]">
      <CardHeader className="text-center">
        <CardTitle>Create an account</CardTitle>
      </CardHeader>
      <CardContent>
        <RegisterForm />
      </CardContent>
      <CardFooter>
        <SocialFooter />
      </CardFooter>
      <CardFooter>
        <SecondryButton href="/login" label="Already have an account?" />
      </CardFooter>
    </Card>
  );
};
export default RegisterPage;
