import { writable, type Writable } from 'svelte/store';
import type { Product } from '../types/product.type';

const favorites: Writable<Product[]> = writable([]);

const customFavoritesStore = {
  subscribe: favorites.subscribe,
  get: (products: Product[]) => {
    favorites.update((items: Product[]) => {
      const favoriteStorage = localStorage.getItem('favorites')
        ? localStorage.getItem('favorites').split(', ')
        : [];
      if (!favoriteStorage.length) return (items = []);

      const favorites = favoriteStorage.map((item) => {
        const index = products.findIndex((product) => product.id === item);
        if (index !== -1) {
          return { ...products[index] };
        }
      });

      return (items = [...favorites]);
    });
  },
  toggle: (product: Product) => {
    favorites.update((items: Product[]) => {
      const existingFavoriteItem = items.find(
        (item) => item.name === product.name
      );

      const favoriteStorage = localStorage.getItem('favorites')
        ? localStorage.getItem('favorites').split(', ')
        : [];

      if (!existingFavoriteItem) {
        localStorage.setItem(
          `favorites`,
          favoriteStorage
            .join(', ')
            .concat(favoriteStorage.length ? `, ${product.id}` : product.id)
        );

        return [...items, product];
      } else {
        const storage = favoriteStorage.filter((item) => item !== product.id);
        storage.length
          ? localStorage.setItem(`favorites`, storage.join(', '))
          : localStorage.removeItem(`favorites`);

        return items.filter((item) => item.name !== product.name);
      }
    });
  },
};

export default customFavoritesStore;
