import { writable, type Writable } from 'svelte/store';
import type { Product } from '../types/product.type';

const cart: Writable<Product[]> = writable([]);

const customCartStore = {
  subscribe: cart.subscribe,
  add: (product: Product) => {
    cart.update((items: Product[]) => {
      const existingCartItemIndex = items.findIndex(
        (item) => item.name === product.name
      );
      const existingCartItem = items[existingCartItemIndex];
      let updatedCart: Product[];
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + 1,
        };
        updatedCart = [...items];
        updatedCart[existingCartItemIndex] = updatedItem;
        return updatedCart;
      } else {
        return (items = [...items, product]);
      }
    });
  },
  remove: (product: Product) => {
    cart.update((items: Product[]) => {
      const existingCartItemIndex = items.findIndex(
        (item) => item.name === product.name
      );
      const existingCartItem = items[existingCartItemIndex];
      let updatedCart: Product[];
      if (existingCartItem.amount > 1) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount - 1,
        };
        updatedCart = [...items];
        updatedCart[existingCartItemIndex] = updatedItem;
        return updatedCart;
      } else {
        return items.filter((item) => item.name !== product.name);
      }
    });
  },
};

export default customCartStore;
