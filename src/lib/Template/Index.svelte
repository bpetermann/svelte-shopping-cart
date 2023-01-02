<script lang="ts">
  import type { Product } from '../../types/product.type';
  import Header from '../Organisms/Header.svelte';
  import Cart from '../Organisms/Cart.svelte';
  import Hero from '../Organisms/Hero.svelte';
  import Newsletter from '../Organisms/Newsletter.svelte';
  import Products from '../Organisms/Products.svelte';
  import Faqs from '../Organisms/Faqs.svelte';
  import Footer from '../Organisms/Footer.svelte';

  let cart: Product[] = [];
  let showCart: boolean = false;
  let searchterm: string = '';
  let products: Product[] = [
    {
      id: 'i1',
      name: 'Brogue',
      description: 'Green wingtip brogues',
      price: 89.99,
      amount: 1,
      category: 'Shoes',
    },
    {
      id: 'i2',
      name: 'Sandals',
      description: 'Maroon sandals',
      price: 85.99,
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

  $: searchedProducts = products.filter((item) => {
    return item.description.toLowerCase().includes(searchterm.toLowerCase());
  });
  $: totalCartItems = cart.reduce(function (acc, item) {
    return acc + item.amount;
  }, 0);

  const toggleCart = () => {
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

<Header on:openCart={toggleCart} bind:value={searchterm} {totalCartItems} />
{#if showCart}
  <Cart
    {cart}
    on:close={toggleCart}
    on:add={addProduct}
    on:remove={removeProduct}
  />
{/if}
<Hero />
<Products products={searchedProducts} on:add={addProduct} />
<Newsletter />
<Faqs />
<Footer />
