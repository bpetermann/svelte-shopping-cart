<script lang="ts">
  import Template from '../src/lib/Template/Index.svelte';
  import type { Product } from './types/product.type';

  let cart: Product[] = [];
  let showCart: boolean = false;
  let searchterm: string = '';
  let products: Product[] = [
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
  ];

  $: searchProducts = products.filter((item) => {
    return item.description.toLowerCase().includes(searchterm.toLowerCase());
  });

  $: cartLength = cart.reduce(function (acc, item) {
    return acc + item.amount;
  }, 0);

  const toggleCart: () => void = () => {
    showCart = !showCart;
  };

  const addProduct = ({ detail }: { detail: Product }) => {
    const existingCartItemIndex = cart.findIndex(
      (item) => item.name === detail.name
    );
    const existingCartItem = cart[existingCartItemIndex];
    let updatedCart: Product[];
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + 1,
      };
      updatedCart = [...cart];
      updatedCart[existingCartItemIndex] = updatedItem;
      cart = updatedCart;
    } else {
      cart = [...cart, detail];
    }
  };

  const removeProduct = ({ detail }: { detail: Product }) => {
    const existingCartItemIndex = cart.findIndex(
      (item) => item.name === detail.name
    );
    const existingCartItem = cart[existingCartItemIndex];
    let updatedCart: Product[];
    if (existingCartItem.amount > 1) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedCart = [...cart];
      updatedCart[existingCartItemIndex] = updatedItem;
      cart = updatedCart;
    } else {
      cart = cart.filter((item) => item.name !== detail.name);
    }
  };
</script>

<Template
  on:remove={removeProduct}
  on:openCart={toggleCart}
  bind:value={searchterm}
  on:close={toggleCart}
  on:add={addProduct}
  {searchProducts}
  {cartLength}
  {showCart}
  {cart}
/>
