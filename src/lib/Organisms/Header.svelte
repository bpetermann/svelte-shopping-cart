<script lang="ts">
  import NavbarMobile from '../Molecules/Header/NavbarMobile.svelte';
  import SearchBar from '../Molecules/Header/SearchBar.svelte';
  import InfoBar from '../Molecules/Header/InfoBar.svelte';
  import Navbar from '../Molecules/Header/Navbar.svelte';
  import searchTerm from '../../store/search-store';
  import category from '../../store/category-store';

  export let innerWidth: number;
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

  $: mainCategories = categories.filter((item) => item.id <= 2);
  $: $searchTerm = value;
  $: if (innerWidth > 768 && $searchTerm) {
    $searchTerm = '';
    value = '';
  }

  const closeInfo: () => void = () => {
    showInfo = !showInfo;
  };

  const toggleMenu: () => void = () => {
    isOpen = !isOpen;
  };

  const changeCategory = ({ detail }: { detail: number }) => {
    let cat = categories.find((item) => item.id === detail);
    $category = cat.name;
  };
</script>

<header>
  {#if showInfo}
    <InfoBar on:close={closeInfo} />
  {/if}
  <Navbar on:change={changeCategory} on:toggle {mainCategories} />
  <SearchBar on:toggle={toggleMenu} bind:value />
  {#if isOpen}
    <NavbarMobile on:change={changeCategory} {categories} />
  {/if}
</header>
