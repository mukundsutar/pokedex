import { create } from "zustand";

export const useIDStore = create((set) => ({
	currID: 1,

	// setID: (id) => set({ currID: id }),
    setID: (id) => set(({ currID: id })),
}));
