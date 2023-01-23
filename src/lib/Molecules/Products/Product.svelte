<script lang="ts">
  import AddButton from '../../Atoms/Buttons/AddButton.svelte';
  import { createEventDispatcher } from 'svelte';
  import Text from '../../Atoms/Text.svelte';
  const dispatch = createEventDispatcher();

  export let id: string;
  export let name: string;
  export let description: string;
  export let price: number;

  let style: string = '';

  const addProduct = () => {
    style = 'loading';
    setTimeout(() => {
      style = 'added';
      setTimeout(() => {
        style = '';
        dispatch('get', id);
      }, 750);
    }, 500);
  };
</script>

<div class="container">
  <div class="image">
    <img
      src="/images/products/{name}.png"
      alt={description}
      title={description}
    />
  </div>
  <Text size="lg">{description}</Text>
  <Text size="lg">{price}$</Text>
  <AddButton on:click={addProduct} {style} />
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 16px 0px;
    gap: 16px;
  }

  .image {
    max-height: 224px;
    max-width: 160px;
  }

  .image > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
