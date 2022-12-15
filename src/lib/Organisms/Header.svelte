<script lang="ts">
  import InfoBar from '../Molecules/InfoBar.svelte';
  import Navbar from '../Molecules/Navbar.svelte';
  import NavbarMobile from '../Molecules/NavbarMobile.svelte';
  import SearchBar from '../Molecules/SearchBar.svelte';

  let isOpen: boolean = false;
  let searchTerm: string = '';

  const toggleMenu: () => void = () => {
    isOpen = !isOpen;
  };

  const searchInput = (event: { detail: { value: string } }) => {
    searchTerm = event.detail.value;
    console.log(searchTerm)
  };
</script>

<InfoBar />
<Navbar />
<SearchBar
  on:toggleMenu={toggleMenu}
  on:searchInput={searchInput}
  {searchTerm}
/>
{#if isOpen}
  <NavbarMobile />
{/if}
