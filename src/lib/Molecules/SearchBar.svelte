<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import BurgerButton from '../Atoms/BurgerButton.svelte';
  import Container from '../Atoms/Container.svelte';
  import Input from '../Atoms/Input.svelte';

  const dispatch = createEventDispatcher();
  
  export let value: string;
</script>

<Container classname={'searchbar'}>
  <BurgerButton on:click={() => dispatch('toggle')} />
  <Input bind:value classname={'search'} />
</Container>
