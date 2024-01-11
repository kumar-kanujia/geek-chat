import Link from "next/link";
import { Button } from "@/components/ui/button";

type SecondryButtonProp = {
  href: string;
  label: string;
};

const SecondryButton = ({ href, label }: SecondryButtonProp) => {
  return (
    <Button variant="link" className="font-normal w-full" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default SecondryButton;
