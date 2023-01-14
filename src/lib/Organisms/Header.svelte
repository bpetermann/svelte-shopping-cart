<script lang="ts">
  import searchTerm from '../../store/search-store';
  import InfoBar from '../Molecules/Header/InfoBar.svelte';
  import Navbar from '../Molecules/Header/Navbar.svelte';
  import NavbarMobile from '../Molecules/Header/NavbarMobile.svelte';
  import SearchBar from '../Molecules/Header/SearchBar.svelte';

  let value: string = '';

  let showInfo: boolean = true;
  let isOpen: boolean = false;
  let categories: { id: number; name: string }[] = [
    { id: 1, name: 'Women' },
    { id: 2, name: 'Men' },
    { id: 3, name: 'Sport' },
    { id: 4, name: 'Bags' },
    { id: 5, name: 'Shoes' },
  ];

  let category: { id: number; name: string } = categories[0];

  $: mainCategories = categories.filter((item) => item.id <= 2);
  $: $searchTerm = value;

  const closeInfo: () => void = () => {
    showInfo = !showInfo;
  };

  const toggleMenu: () => void = () => {
    isOpen = !isOpen;
  };

  const changeCategory = ({ detail }: { detail: number }) => {
    category = categories.find((item) => item.id === detail);
  };
</script>

<header>
  {#if showInfo}
    <InfoBar on:close={closeInfo} />
  {/if}
  <Navbar on:change={changeCategory} on:toggle {mainCategories} {category} />
  <SearchBar on:toggle={toggleMenu} bind:value />
  {#if isOpen}
    <NavbarMobile on:change={changeCategory} {categories} {category} />
  {/if}
</header>
