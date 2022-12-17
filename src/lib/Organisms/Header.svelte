<script lang="ts">
  import InfoBar from '../Molecules/InfoBar.svelte';
  import Navbar from '../Molecules/Navbar.svelte';
  import NavbarMobile from '../Molecules/NavbarMobile.svelte';
  import SearchBar from '../Molecules/SearchBar.svelte';

  let showInfo: boolean = true;
  let isOpen: boolean = false;
  let categories: { id: number; name: string }[] = [
    { id: 1, name: 'Women' },
    { id: 2, name: 'Men' },
    { id: 3, name: 'Sport' },
    { id: 4, name: 'Bags' },
    { id: 5, name: 'Shoes' },
  ];
  let searchterm: string = '';
  let category: string = '';

  $: mainCategories = categories.filter((cat) => cat.id <= 2);

  const closeInfo: () => void = () => {
    showInfo = !showInfo;
  };

  const toggleMenu: () => void = () => {
    isOpen = !isOpen;
  };

  const changeCategory = (navItem: { detail: string }) => {
    category = navItem.detail;
  };

  const searchInput = (event: { detail: { value: string } }) => {
    searchterm = event.detail.value;
  };
</script>

{#if showInfo}
  <InfoBar on:close={closeInfo} />
{/if}
<Navbar {mainCategories} on:change={changeCategory} />
<SearchBar on:toggle={toggleMenu} on:input={searchInput} {searchterm} />
{#if isOpen}
  <NavbarMobile {categories} on:change={changeCategory} />
{/if}
