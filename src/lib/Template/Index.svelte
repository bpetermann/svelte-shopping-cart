<script lang="ts">
  import Header from '@/lib/Organisms/Header.svelte';
  import Cart from '@/lib/Organisms/Cart.svelte';
  import Favorites from '@/lib/Organisms/Favorites.svelte';
  import Hero from '@/lib/Organisms/Hero.svelte';
  import Products from '@/lib/Organisms/Products.svelte';
  import Newsletter from '@/lib/Organisms/Newsletter.svelte';
  import Faqs from '@/lib/Organisms/Faqs.svelte';
  import Footer from '@/lib/Organisms/Footer.svelte';

  export let innerWidth: number;
  let showCart: boolean = false;
  let showFavorites: boolean = false;

  const toggleCart: () => void = () => {
    showCart = !showCart;
  };

  const toggleFavorites: () => void = () => {
    showFavorites = !showFavorites;
  };
</script>

<Header
  on:showFavorites={toggleFavorites}
  on:toggle={toggleCart}
  {innerWidth}
/>
{#if showCart}
  <Cart on:toggle={toggleCart} />
{/if}
{#if showFavorites}
  <Favorites on:toggle={toggleFavorites} />
{/if}
<Hero />
<Products />
<Newsletter />
<Faqs />
<Footer />
