<script lang="ts" context="module">
  import type { Product } from '../../types/product.type';
  import FrequentQuestions from '../Organisms/FrequentQuestions.svelte';
  import Header from '../Organisms/Header.svelte';
  import Hero from '../Organisms/Hero.svelte';
  import Newsletter from '../Organisms/Newsletter.svelte';
  import Products from '../Organisms/Products.svelte';
  import Footer from '../Organisms/Footer.svelte';

  let cart: Product[] = [];

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
</script>

<Header />
<Hero />
<Products on:add={addProduct} />
<Newsletter />
<FrequentQuestions />
<Footer />
