import { create } from "zustand";

export const useStore = create((set) => ({
  journey: [],
  pagination: 0,

  setJourney: (journey) =>
    set((state) => ({
      ...state,
      journey,
    })),
  setPagination: (pagination) =>
    set((state) => ({
      ...state,
      pagination,
    })),
}));
