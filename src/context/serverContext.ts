import { UserServer } from "@/loaders/server";
import { Server } from "@prisma/client";
import { create } from "zustand";

type serverStore = {
  server: UserServer | null;
  setServer: (server: UserServer) => void;
};

const serverContext = create<serverStore>((set) => ({
  server: null,
  setServer: (server: UserServer) => set({ server }),
}));

export default serverContext;
