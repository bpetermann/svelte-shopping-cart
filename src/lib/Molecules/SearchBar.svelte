<script>
  import { createEventDispatcher } from 'svelte';
  import BurgerButton from '../Atoms/BurgerButton.svelte';
  import Container from '../Atoms/Container.svelte';
  import Input from '../Atoms/Input.svelte';

  const dispatch = createEventDispatcher();
  export let searchTerm;
</script>

<Container classname={'searchbar'}>
  <BurgerButton on:click={() => dispatch('toggleMenu')} />
  <Input
    value={searchTerm}
    on:input={(event) => dispatch('searchInput', event.target)}
  />
</Container>
