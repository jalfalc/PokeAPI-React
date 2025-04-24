import { create } from "zustand";

interface SearchStore {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
    filter: string;
    currentSearch: string;
    setFilter:(value:string) => void;
    setCurrentSearch:(value:string) => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
    isOpen: false,
    filter: "",
    currentSearch: "",
    openModal: () => set({ isOpen: true }),
    closeModal: () => set({ isOpen: false, filter:"", currentSearch:""}),
    setFilter:(value: string) => set({filter:value}),
    setCurrentSearch:(value: string) => set({currentSearch: value})
}));