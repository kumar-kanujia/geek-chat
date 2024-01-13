import DMItem from "./DMItem";

const DMS = [
  {
    src: "",
    userName: "Djdbv jdbv",
    href: "/servers/3uhu4",
  },
  {
    src: "",
    userName: "Me ",
    href: "/servers/me",
  },
  {
    src: "",
    userName: "Djdbv jdbv",
    href: "/servers/2u3u",
  },
  {
    src: "",
    userName: "Djdbv jdbv",
    href: "/servers/u3be",
  },
  {
    src: "",
    userName: "Djdbv jdbv",
    href: "/servers/3477",
  },
  {
    src: "",
    userName: "Djdbv jdbv",
    href: "/servers/37446",
  },
];

const DirectMessages = () => {
  return (
    <ul className="w-full px-4">
      {DMS.map(({ src, userName, href }) => (
        <DMItem key={userName} src={src} userName={userName} href={href} />
      ))}
    </ul>
  );
};
export default DirectMessages;
