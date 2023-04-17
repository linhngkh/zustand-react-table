import { create } from "zustand";

export const useStore = create((set) => ({
  filter: "",
  journey: [],
  pageCount: 0,
  loading: false,
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
  setPageCount: (pageCount) =>
    set((state) => ({
      ...state,
      pageCount,
    })),
  setLoading: (loading) =>
    set((state) => ({
      ...state,
      loading,
    })),
}));
