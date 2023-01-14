<script lang="ts">
  import Template from '../src/lib/Template/Index.svelte';

  let showCart: boolean = false;

  const toggleCart: () => void = () => {
    showCart = !showCart;
  };
</script>

<Template on:toggle={toggleCart} {showCart} />
