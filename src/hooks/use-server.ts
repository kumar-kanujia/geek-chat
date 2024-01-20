import serverContext from "@/context/serverContext";

export default function useServer() {
  const { server } = serverContext();
  return server;
}
