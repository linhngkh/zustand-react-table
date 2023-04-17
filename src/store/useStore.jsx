import { create } from "zustand";

export const useStore = create((set) => ({
  filter: "",
  journey: [],
  setFilter: (filter) =>
    set((state) => ({
      ...state,
      filter,
    })),
  setJourney: (journey) =>
    set((state) => ({
      ...state,
      journey,
    })),
}));
