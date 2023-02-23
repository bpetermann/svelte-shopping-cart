<script lang="ts">
  import NavbarMobile from '@/lib/Molecules/Header/NavbarMobile.svelte';
  import BurgerButton from '@/lib/Atoms/Buttons/BurgerButton.svelte';
  import Container from '@/lib/Atoms/Container.svelte';
  import Input from '@/lib/Atoms/Input.svelte';

  export let changeCategory: (e: CustomEvent<number>) => void;
  export let categories: { id: number; name: string }[];
  export let value: string;

  let isOpen: boolean = false;

  const toggleMenu: () => void = () => {
    isOpen = !isOpen;
  };
</script>

<Container classname={'searchbar'}>
  <BurgerButton on:click={toggleMenu} />
  <Input bind:value classname={'search'} />
</Container>
{#if isOpen}
  <NavbarMobile on:change={changeCategory} {categories} />
{/if}
