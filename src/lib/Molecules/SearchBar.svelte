<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import BurgerButton from '../Atoms/BurgerButton.svelte';
  import Container from '../Atoms/Container.svelte';
  import Input from '../Atoms/Input.svelte';

  const dispatch = createEventDispatcher();

  export let searchterm: string;

  const searchTerm = (event: Event) => {
    dispatch('input', (event.target as HTMLInputElement).value);
  };
</script>

<Container classname={'searchbar'}>
  <BurgerButton on:click={() => dispatch('toggle')} />
  <Input value={searchterm} on:input={searchTerm} classname={'search'} />
</Container>
