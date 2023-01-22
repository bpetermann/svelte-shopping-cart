<script lang="ts">
  import Template from '../src/lib/Template/Index.svelte';

  let showCart: boolean = false;
  let innerWidth: number = 0;

  const toggleCart: () => void = () => {
    showCart = !showCart;
  };
</script>

<svelte:window bind:innerWidth />
<Template on:toggle={toggleCart} {showCart} {innerWidth} />
