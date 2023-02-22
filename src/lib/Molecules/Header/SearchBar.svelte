<script lang="ts">
  import BurgerButton from '@/lib/Atoms/Buttons/BurgerButton.svelte';
  import Container from '@/lib/Atoms/Container.svelte';
  import { createEventDispatcher } from 'svelte';
  import Input from '@/lib/Atoms/Input.svelte';
  const dispatch = createEventDispatcher();

  export let value: string;
</script>

<Container classname={'searchbar'}>
  <BurgerButton on:click={() => dispatch('toggle')} />
  <Input bind:value classname={'search'} />
</Container>
