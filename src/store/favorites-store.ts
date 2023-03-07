import { writable, type Writable } from 'svelte/store';
import type { Product } from '../types/product.type';

const favorites: Writable<Product[]> = writable([]);

const customFavoritesStore = {
  subscribe: favorites.subscribe,
  get: (products: Product[]) => {
    favorites.update((items: Product[]) => {
      if (!!localStorage.length) {
        const initialFavoriteitems = [];
        for (let i = 0; i < localStorage.length; i++) {
          if (localStorage.key(i).includes('favorite')) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            const index = products.findIndex((item) => item.id === value);
            if (index !== -1) {
              initialFavoriteitems.push(products[index]);
            }
          }
        }
        return (items = [...initialFavoriteitems]);
      }
    });
  },
  toggle: (product: Product) => {
    favorites.update((items: Product[]) => {
      const existingFavoriteItem = items.find(
        (item) => item.name === product.name
      );
      if (!existingFavoriteItem) {
        localStorage.setItem(`favorite: ${product.id}`, product.id);
        return [...items, product];
      } else {
        localStorage.removeItem(`favorite: ${product.id}`);
        return items.filter((item) => item.name !== product.name);
      }
    });
  },
};

export default customFavoritesStore;
