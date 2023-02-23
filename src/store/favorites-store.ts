import { writable, type Writable } from 'svelte/store';
import type { Product } from '../types/product.type';

const favorites: Writable<Product[]> = writable([]);

const customFavoritesStore = {
  subscribe: favorites.subscribe,
  toggle: (product: Product) => {
    favorites.update((items: Product[]) => {
      const existingFavoriteItem = items.find(
        (item) => item.name === product.name
      );
      return !existingFavoriteItem
        ? [...items, product]
        : items.filter((item) => item.name !== product.name);
    });
  },
};

export default customFavoritesStore;
