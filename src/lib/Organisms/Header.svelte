<script lang="ts">
  import InfoBar from '../Molecules/InfoBar.svelte';
  import Navbar from '../Molecules/Navbar.svelte';
  import NavbarMobile from '../Molecules/NavbarMobile.svelte';
  import SearchBar from '../Molecules/SearchBar.svelte';

  export let totalCartItems: number;
  export let value: string = '';

  let showInfo: boolean = true;
  let isOpen: boolean = false;
  let categories: { id: number; name: string }[] = [
    { id: 1, name: 'Women' },
    { id: 2, name: 'Men' },
    { id: 3, name: 'Sport' },
    { id: 4, name: 'Bags' },
    { id: 5, name: 'Shoes' },
  ];

  let category: { id: number; name: string } = { id: 1, name: 'Women' };

  $: mainCategories = categories.filter((cat) => cat.id <= 2);

  const closeInfo: () => void = () => {
    showInfo = !showInfo;
  };

  const toggleMenu: () => void = () => {
    isOpen = !isOpen;
  };

  const changeCategory = ({ detail }: { detail: number }) => {
    category = categories.find((cat) => cat.id === detail);
  };
</script>

<header>
  {#if showInfo}
    <InfoBar on:close={closeInfo} />
  {/if}
  <Navbar
    {mainCategories}
    {totalCartItems}
    {category}
    on:change={changeCategory}
    on:openCart
  />
  <SearchBar on:toggle={toggleMenu} bind:value/>
  {#if isOpen}
    <NavbarMobile {categories} on:change={changeCategory} {category} />
  {/if}
</header>
