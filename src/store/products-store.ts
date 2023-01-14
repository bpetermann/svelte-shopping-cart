import { readable, type Readable } from 'svelte/store';
import type { Product } from '../types/product.type';

const products: Readable<Product[]> = readable([
  {
    id: 'i1',
    name: 'Brogue',
    description: 'Green wingtip brogues',
    price: 85.99,
    amount: 1,
    category: 'Shoes',
  },
  {
    id: 'i2',
    name: 'Sandals',
    description: 'Maroon sandals',
    price: 24.99,
    amount: 1,
    category: 'Shoes',
  },
  {
    id: 'i3',
    name: 'Sneakers',
    description: 'Multi-coloured Sneakers',
    price: 69.99,
    amount: 1,
    category: 'Shoes',
  },
]);


export default products;
