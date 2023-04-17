import { create } from "zustand";

export const useStore = create((set) => ({
  filter: "",
  journey: [],
  pagination: 0,
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
  setPagination: (pagination) =>
    set((state) => ({
      ...state,
      pagination,
    })),
}));
