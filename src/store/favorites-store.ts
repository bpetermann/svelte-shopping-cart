import { writable, type Writable } from 'svelte/store';
import type { Product } from '../types/product.type';

const favorites: Writable<Product[]> = writable([]);

const customFavoritesStore = {
  subscribe: favorites.subscribe,
  toggle: (product: Product) => {
    favorites.update((items: Product[]) => {
      const existingFavoritesItemIndex = items.findIndex(
        (item) => item.name === product.name
      );
      return !!existingFavoritesItemIndex
        ? [...items, product]
        : items.filter((item) => item.name !== product.name);
    });
  },
};

export default customFavoritesStore;
