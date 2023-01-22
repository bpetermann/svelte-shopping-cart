<script lang="ts">
  import Header from '../Organisms/Header.svelte';
  import Cart from '../Organisms/Cart.svelte';
  import Hero from '../Organisms/Hero.svelte';
  import Products from '../Organisms/Products.svelte';
  import Newsletter from '../Organisms/Newsletter.svelte';
  import Faqs from '../Organisms/Faqs.svelte';
  import Footer from '../Organisms/Footer.svelte';

  export let showCart: boolean;
  export let innerWidth: number;
</script>

<Header on:toggle {innerWidth} />
{#if showCart}
  <Cart on:toggle />
{/if}
<Hero />
<Products />
<Newsletter />
<Faqs />
<Footer />
