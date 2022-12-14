<script lang="ts">
  import MenuButton from '../Atoms/MenuButton.svelte';
  import InfoBar from '../Molecules/InfoBar.svelte';
  import Navbar from '../Molecules/Navbar.svelte';
  import NavbarMobile from '../Molecules/NavbarMobile.svelte';
  import SearchBar from '../Molecules/SearchBar.svelte';

  let isOpen: boolean = false;

  const toggleMenu: () => void = () => {
    isOpen = !isOpen;
  };
</script>

<InfoBar />
<Navbar />
<SearchBar on:toggleMenu={toggleMenu} />
{#if isOpen}
  <NavbarMobile />
{/if}
