<script lang="ts">
  import Header from '../Organisms/Header.svelte';
  import Cart from '../Organisms/Cart.svelte';
  import Favorites from '../Organisms/Favorites.svelte';
  import Hero from '../Organisms/Hero.svelte';
  import Products from '../Organisms/Products.svelte';
  import Newsletter from '../Organisms/Newsletter.svelte';
  import Faqs from '../Organisms/Faqs.svelte';
  import Footer from '../Organisms/Footer.svelte';

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
