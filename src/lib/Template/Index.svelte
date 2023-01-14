<script lang="ts">
  import type { Product } from '../../types/product.type';
  import Header from '../Organisms/Header.svelte';
  import Cart from '../Organisms/Cart.svelte';
  import Hero from '../Organisms/Hero.svelte';
  import Newsletter from '../Organisms/Newsletter.svelte';
  import Products from '../Organisms/Products.svelte';
  import Faqs from '../Organisms/Faqs.svelte';
  import Footer from '../Organisms/Footer.svelte';

  export let showCart: boolean;
</script>

<Header on:toggle />
{#if showCart}
  <Cart on:toggle />
{/if}
<Hero />
<Products />
<Newsletter />
<Faqs />
<Footer />
