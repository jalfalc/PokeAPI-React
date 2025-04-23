import { create } from "zustand";

interface FavoriteStore {
  favorites: string[];
  addFavourite: (id: string) => void;
  deleteFavorite: (id: string) => void;
}

export const useFavoriteStore = create<FavoriteStore>((set) => ({
  favorites: localStorage.getItem("favorite-pokemons")?.split(",") || [],
  addFavourite: (id: string) => {
    set((state) => {
      const favorites = [...state.favorites, id];
      localStorage.setItem("favorite-pokemons", favorites.join(","));
      return { favorites };
    });
  },
  deleteFavorite: (id: string) => {
    set((state) => {
      const favorites = state.favorites.filter((favorite) => favorite !== id);
      localStorage.setItem("favorite-pokemons", favorites.join(","));
      return { favorites };
    });
  },
}));
