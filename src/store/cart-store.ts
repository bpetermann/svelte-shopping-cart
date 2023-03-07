import { writable, type Writable } from 'svelte/store';
import type { Product } from '../types/product.type';

const cart: Writable<Product[]> = writable([]);

const customCartStore = {
  subscribe: cart.subscribe,
  get: (products: Product[]) => {
    cart.update((items: Product[]) => {
      if (!localStorage.length) {
        return (items = []);
      }
      const initialCartItems = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = parseInt(localStorage.getItem(key));
        const index = products.findIndex((item) => item.id === key);
        if (index !== -1) {
          initialCartItems.push({
            ...products[index],
            amount: value,
          });
        }
      }
      return (items = [...initialCartItems]);
    });
  },
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
        localStorage.setItem(product.id, updatedItem.amount.toString());
        return updatedCart;
      } else {
        localStorage.setItem(product.id, product.amount.toString());
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
        localStorage.setItem(product.id, updatedItem.amount.toString());
        return updatedCart;
      } else {
        localStorage.removeItem(product.id);
        return items.filter((item) => item.name !== product.name);
      }
    });
  },
};

export default customCartStore;
