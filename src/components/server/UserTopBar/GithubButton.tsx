import ActionTooltip from "@/components/ActionTooltip";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

const GithubButton = () => {
  return (
    <ActionTooltip label="Creater Github">
      <Link href="https://github.com">
        <BsGithub className="text-gray-500" fontSize={22} />
      </Link>
    </ActionTooltip>
  );
};
export default GithubButton;
