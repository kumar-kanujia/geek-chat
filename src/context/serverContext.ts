import { Server } from "@prisma/client";
import { create } from "zustand";

type serverStore = {
  server: Server | null;
  setServer: (server: Server) => void;
};

const serverContext = create<serverStore>((set) => ({
  server: null,
  setServer: (server: Server) => set({ server }),
}));

export default serverContext;
