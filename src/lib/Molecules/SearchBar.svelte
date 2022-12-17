<script>
  import { createEventDispatcher } from 'svelte';
  import BurgerButton from '../Atoms/BurgerButton.svelte';
  import Container from '../Atoms/Container.svelte';
  import Input from '../Atoms/Input.svelte';

  const dispatch = createEventDispatcher();
  export let searchterm;
</script>

<Container classname={'searchbar'}>
  <BurgerButton on:click={() => dispatch('toggle')} />
  <Input
    value={searchterm}
    on:input={(event) => dispatch('input', event.target)}
  />
</Container>
